const request = require('request');
var fs = require('fs');
const { v4 } = require('uuid');
const AWS = require('aws-sdk');
const CryptoJS = require('crypto-js');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const bucketName = 'advertise';



class adRestDAO {
  async uploadFileToObjectStorage(file, fileName) {  
    try {
      const S3 = new AWS.S3({
        endpoint : endpoint,
        region : region,
        credentials : {
          accessKeyId : global.accessKey,
          secretAccessKey : global.secretKey
        }
      });
  
      await S3.putObject({
        Bucket : bucketName,
        Key : fileName,
        ACL : 'public-read',
        Body : file.buffer
      }).promise();
    } catch (error) {
      console.log('[AdRestDAO uploadFileToObjectStorage] error = ', error);
    } 
  }

  async removeFileFromObjectStorage(fileName) {
    try {
      const S3 = new AWS.S3({
        endpoint : endpoint,
        region : region,
        credentials : {
          accessKeyId : global.accessKey,
          secretAccessKey : global.secretKey
        }
      });
  
      await S3.deleteObject({
        Bucket : bucketName,
        Key : fileName,
      }).promise();
    } catch (error) {
      console.log('[AdRestDAO removeFileToObjectStorage] error = ', error);
    }
  }

  

  async createLiveCurtain(fileName) {
    try {
      const url = 'https://livestation.apigw.ntruss.com/api/v2/curtainContents';
      const method = "POST";
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
        },
  
        body : JSON.stringify({
          content : [
            {
              'bucketName' : bucketName,
              'filePath' : '/' + fileName,
            },
          ]
        })
      };
  
      return new Promise((resolve, rejcet) => {
        request(option, (error, response, body) => {
          console.log('[AdRestDAO createLiveCurtain] body = ', body);
          const bodyObject = JSON.parse(body);
          const errorCode = bodyObject.errorCode;  

          if(errorCode) {
            rejcet(bodyObject);
          } else {
            resolve(bodyObject.content.id);
          }
        });
      })
      .then((result) =>{
        console.log('[AdDAO createLiveCurtain] result = ', result);
        return result;
      })
      .catch((error) => {
        console.log('[AdDAO createLiveCurtain] error = ', error);
      });
    } catch (error) {
      console.log('[AdDAO createLiveCurtain] error = ', error);
    }
  }

  async startLiveCurtain(channelId, curtainId) {
    try {
      console.log('[AdRestDAO startLiveCurtain] start');

      const url = `https://livestation.apigw.ntruss.com/api/v2/channels/${channelId}/curtain/insert`;
      const method = 'POST';
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
        },
        body : JSON.stringify({
          contentId : [
            curtainId
          ],
          insertTime : 1
        })
      }
      
      request.post(option, (error, response, body) => {
        const bodyObject = JSON.parse(body);
        const errorCode = bodyObject.errorCode;

        if(errorCode) {
          console.log('[AdRestDAO startLiveCurtain] errorCode = ', bodyObject);
          return;
        }
        
        console.log('[AdRestDAO startLiveCurtain] bodyObject = ', bodyObject);
      });
    } catch (error) {
      console.log('[AdRestDAO startLiveCurtain] error = ', error);
    }
  }

  async getLiveCurtainList() {
    const url = 'https://livestation.apigw.ntruss.com/api/v2/curtainContents?pageNo=1&pageSizeNo=15&status=READY';
    const method = 'GET';
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

    return new Promise((resolve, rejcet) => {
      request(option, (error, response, body) => {
        const bodyObject = JSON.parse(body);
        const errorCode = bodyObject.errorCode;  

        console.log('[AdRestDAO getLiveCurtainList] bodyObject = ', bodyObject);
        if(errorCode) {
          console.log('[AdRestDAO getLiveCurtainList] errorCode = ', bodyObject);
          return;
        }

        resolve(bodyObject);
      });
    });
  }

  async removeLiveCurtain(curtainId) {
    const url = `https://livestation.apigw.ntruss.com/api/v2/curtainContents/${curtainId}`;
    const timestamp = Date.now().toString();
    const method = "DELETE";
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

    return new Promise((resolve, rejcet) => {
      request(option, (error, response, body) => {
        const bodyObject = JSON.parse(body);
        const errorCode = bodyObject.errorCode;  

        console.log('[AdRestDAO removeLiveCurtain] bodyObject = ', bodyObject);
        if(errorCode) {
          console.log('[AdRestDAO removeLiveCurtain] errorCode = ', bodyObject);
          return;
        }
      });
    });
  }

  async getCurtainStatus(curtainId) {
    try {
      const url = `https://livestation.apigw.ntruss.com/api/v2/curtainContents/${curtainId}`;
      const timestamp = Date.now().toString();
      const method = 'GET';
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
      
      const result = await new Promise(async (resolve, rejcet) => {
        request(option, (error, response, body) => {
          try {
            const bodyObject = JSON.parse(body);
            const errorCode = bodyObject.errorCode;
            console.log('[AdRestDAO getCurtainStatus] bodyObject = ', bodyObject);

            if (errorCode) {
              console.log('[AdRestDAO getCurtainStatus] errorCode = ', bodyObject);
              rejcet(error);
            }
      
            const status = bodyObject.content.status;
            resolve(status);
          } catch (error) {
            console.log('[AdRestDAO getCurtainStatus] error = ', error);
          }
        });
      })
      .catch((error) => {
        console.log('[AdRestDAO getCurtainStatus] error = ', error);
      })

      console.log('[AdRestDAO getCurtainStatus] result = ', result);
      return result;
    } catch (error) {
      console.log('[AdRestDAO getCurtainStatus] error = ', error);
    }
  }

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

module.exports = adRestDAO;