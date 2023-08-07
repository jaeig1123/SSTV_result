const CryptoJS = require('crypto-js');
const { response } = require('express');
const request = require('request');
const axios = require('axios');
const { DATE } = require('mysql/lib/protocol/constants/types');

class StreamingDAO {

  //스트리밍 채널 생성
  async createChannel(streamingTitle, isRecord) {
    const url = "https://livestation.apigw.ntruss.com/api/v2/channels";
    const timestamp = Date.now().toString();
    const method = "POST";
    const signature = this.makeSignature(method, url, timestamp);

    let record;
    let immediateOnAir;
  
    if(isRecord == true) {
      record = {
        "type" : "AUTO_UPLOAD",
        "format" : "MP4",
        "bucketName" : "hls",
        "filePath" : "/livestation",
        "accessControl" : "PUBLIC_READ"
      }

      immediateOnAir = true;
    }else {
      record = {
        "type" : "NO_RECORD"
      }
      immediateOnAir = false;
    }
  
    const option = {
      url : url,
      method : method, 
      headers : {
        'Content-Type' : 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp' : timestamp,
        'x-ncp-iam-access-key' : global.accessKey,
        'x-ncp-apigw-signature-v2' : signature,
        'x-ncp-region_code' : 'KR'
      },
      data : JSON.stringify({
        "channelName" : streamingTitle,
        "cdn" : {
          "createCdn" : true,
          "cdnType" : "CDN_PLUS"
        },
        "qualitySetId" : 3,
        "useDvr" : true,
        "immediateOnAir" : immediateOnAir,
        "timemachineMin" : 360,
        "record" : record,
        "isStreamFailOver" : true
      })
    }
    
    try {
      const response = await axios(option);
      const bodyObject = response.data;
      
      console.log('[StreamingRestDAO createChannel] response.data = ', response.data);
      console.log('[StreamingRestDAO createChannel] bodyObject = ', bodyObject);

      let result;
      if(bodyObject.errorCode) {
        result = 'fail';
      }

      if(bodyObject.content) {
        result = bodyObject.content['channelId'];
      }
      
      return result;
    } catch (error) {
      console.log('[StreamingRestDAO createChannel] error = ', response.data);
      return 'fail';
    }
  }

  //스트리밍 채널의 정보 가져옴
  async getChannelInfo(channelId) {
    const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}`;
    const timestamp = Date.now().toString();
    const method = 'GET';
    const signature = this.makeSignature(method, url, timestamp);
  
    const options = {
      url: url,
      method: method,
      headers: {
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': global.accessKey,
        'x-ncp-apigw-signature-v2': signature,
        'x-ncp-region_code': 'KR',
      },
    };
  
    try {
      const response = await axios(options);
      const bodyObject = response.data;
  
      return bodyObject;
    } catch (error) {
      console.log('[StreamingDAO getChannelInfo] error = ', error);
    }
  }

  async getServiceUrl(channelId) {
    const serviceUrlType = 'GENERAL';
    const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}/serviceUrls?serviceUrlType=${serviceUrlType}`;
    const timestamp = Date.now().toString();
    const method = 'GET';
    const signature = this.makeSignature(method, url, timestamp);
  
    const options = {
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': global.accessKey,
        'x-ncp-apigw-signature-v2': signature,
        'x-ncp-region_code': 'KR',
      },
    };
  
    try {
      const response = await axios(options);
      const bodyObject = response.data;
      const errorCode = bodyObject.errorCode;
  
      if (errorCode) {
        throw new Error('fail');
      } else {
        const serviceURL = bodyObject.content[0].url;
        console.log('[StreamingRestDAO getServiceUrl] result = ', serviceURL);
        return serviceURL;
      }
    } catch (error) {
      console.log('[StreamingRestDAO getServiceUrl] error = ', error.response.data);
      return 'fail';
    }
  }
  
async getThumbnail(channelId) {
  const serviceUrlType = 'THUMBNAIL';

  const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}/serviceUrls?serviceUrlType=${serviceUrlType}`;
  const timestamp = Date.now().toString();
  const method = 'GET';
  const signature = this.makeSignature(method, url, timestamp);

  const options = {
    url: url,
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-ncp-apigw-timestamp': timestamp,
      'x-ncp-iam-access-key': global.accessKey,
      'x-ncp-apigw-signature-v2': signature,
      'x-ncp-region_code': 'KR',
    },
  };

  try {
    const response = await axios(options);
    const bodyObject = response.data;
    const errorCode = bodyObject.errorCode;

    if (errorCode) {
      return 'fail';
    } else {
      const thumbnailUrl = bodyObject.content[0].url;
      console.log('[StreamingDAO getThumbnail] result = ', thumbnailUrl);
      return thumbnailUrl;
    }
  } catch (error) {
    console.log('[StreamingDAO getThumbnail] error = ', error.response.data);
    return 'fail';
  }
}




  async removeStreaming(channelId) {
    const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}`;
    const method = 'DELETE';
    const timestamp = Date.now().toString();
    const signature = this.makeSignature(method, url, timestamp);

    const options = {
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': global.accessKey,
        'x-ncp-apigw-signature-v2': signature,
        'x-ncp-region_code': 'KR',
      },
    };

    try {
      const response = await axios(options);
      const content = response.data.content;

      if(content) {
        return 'success';
      }
    } catch (error) {
      console.log('[StreamingDAO removeStreaming] error = ', error.response.data);
      return 'fail';
    }
  }

  async removeCDN(instanceNo) {
    console.log('[StreamingRestDAO removeCDN] instanceNo = ', instanceNo);
    const url = `https://ncloud.apigw.ntruss.com/cdn/v2/requestCdnPlusPurge?cdnInstanceNo=${instanceNo}&isWholePurge=true&isWholeDomain=true&responseFormatType=JSON`
  
    const method = 'GET';
    const timestamp = Date.now().toString();
    const signature = this.makeSignature(method, url, timestamp);
  
    const options = {
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': global.accessKey,
        'x-ncp-apigw-signature-v2': signature,
      },
    };
  
    try {
      const response = await axios(options);
      console.log('[StreamingRestDAO removeCDN] response = ', response);

      const result = response.data;
      return result;
    } catch (error) {
      console.log('[StreamingRestDAO removeCDN] error');
    }
  }
  
  async finishRecord(channelIdWithOutAd) {
    try {
      const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelIdWithOutAd}/stopRecord`;
      const method = 'PUT';
      const timestamp = Date.now().toString();
      const signature = this.makeSignature(method, url, timestamp);

      const options = {
        url: url,
        method: method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-ncp-apigw-timestamp': timestamp,
          'x-ncp-iam-access-key': global.accessKey,
          'x-ncp-apigw-signature-v2': signature,
          'x-ncp-region_code': 'KR',
        },
      };

      const response = await axios(options);
      
      const result = response.data;
      console.log('[StreamingRestDAO finishRecord] result = ', result);

      return result;
    } catch (error) {
      console.log('[StreamingRestDAO finishRecord] error = ', error.response.data);
      return 'fail';
    }
  }

  async stopStreaming(channelId) {
    try {
      const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}/off`;
      const method = 'PUT';
      const timestamp = Date.now().toString();
      const signature = this.makeSignature(method, url, timestamp);

      const option = {
        url : url,
        method : method,
        headers : {
          'Content-Type' : 'application/json; charset=utf-8',
          'x-ncp-apigw-timestamp' : timestamp,
          'x-ncp-iam-access-key' : global.accessKey,
          'x-ncp-apigw-signature-v2' : signature,
          'x-ncp-region_code' : 'KR'
        }
      }

      const result = await axios(option);      
      const content = result.data.content;

      if(content) {
        return 'success';
      }
    } catch (error) {
      console.log('[StreamingRestDAO stopStreaming] error = ', error.response.data);
    }
  }

  //API 요청 헤더 생성
  makeSignature(method, url, timestamp) {
    var space = " ";
    var newLine = "\n";
  
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, global.secretKey); // secret key
    hmac.update(method);		// HTTP 메서드
    hmac.update(space);		// 공백
    hmac.update(this.createUrlForSignature(url));		// 도메인을 제외한 "/" 아래 전체 url (쿼리스트링 포함)
    hmac.update(newLine);		// 줄바꿈
    hmac.update(timestamp);		// 현재 타임스탬프 (epoch, millisecond)
    hmac.update(newLine);		// 줄바꿈
    hmac.update(global.accessKey);		// access key (from portal or iam)
  
    var hash = hmac.finalize(); 
  
    return hash.toString(CryptoJS.enc.Base64);
  }
  
  createUrlForSignature(url) { 
    return url.substring(url.indexOf('com') + 3);
  }

  
}

module.exports = StreamingDAO;