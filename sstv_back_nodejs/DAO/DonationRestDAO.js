var request = require('request');
var fs = require('fs');
const AWS = require('aws-sdk');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';


class DonationRestDAO {
  async textToMp3(content, voiceType, fileName) {
    try {
      var api_url = 'https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts';
    
      var options = {
        url: api_url,
        form: { speaker: voiceType, volume: '0', speed: '0', pitch: '0', text : content, format: 'mp3' },
        headers: { 'X-NCP-APIGW-API-KEY-ID': global.clientId, 'X-NCP-APIGW-API-KEY': global.clientSecret },
      };
      var writeStream = fs.createWriteStream(`./public/donation/${fileName}`);

      var _req = await request.post(options).on('response', function(response) {
        console.log('[DonationRestDAO textToMp3] Create Donation MP3 ');
        console.log(response.statusCode); // 200
      });
      _req.pipe(writeStream); // file로 출력
    } catch (error) {
      console.log('[DonationRestDAO textToMp3] error = ', error);
    }
  }

  async uploadFileToObjectStorage(fileName) {  
    console.log('[DonationRestDAO uploadFileToObjectStorage] fileName = ', fileName);
    try {
      const S3 = new AWS.S3({
        endpoint : endpoint,
        region : region,
        credentials : {
          accessKeyId : global.accessKey,
          secretAccessKey : global.secretKey
        }
      });
  
      const bucketName = 'donation';
      const filePath = `./public/donation/${fileName}`
      console.log('[DonationRestDAO uploadFileToObjectStorage] filePath = ', filePath);
      await S3.putObject({
        Bucket : bucketName,
        Key : fileName,
        ACL : 'public-read',
        Body : fs.createReadStream(filePath)
      }).promise()
      .then((response) => {
        console.log('[DonationRestDAO uploadFileToObjectStorage] response = ', response);
      });
    } catch (error) {
      console.log('[AdRestDAO uploadFileToObjectStorage] error = ', error);
    }
  }
}

module.exports = DonationRestDAO;
