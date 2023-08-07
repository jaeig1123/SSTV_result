const connection = new (require('../model/MySQLConnection'))();
const moment = require('moment');

class StreamingDAO {
  async addStreaming(streaming) {
    try {
      await connection.connect();

      const sql = "INSERT INTO STREAMING SET ?"
      const param = {
        USER_ID : streaming.userId,
        STREAMING_CATEGORY : streaming.streamingCategory,
        STREAMING_TITLE : streaming.streamingTitle,
        STREAMING_START_TIME : streaming.streamingStartTime
      }

      const pk = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, result) => {
          if(error) {
            reject(error);
          } else {
            resolve(result.insertId);
          }
        });
      })
      .catch((error) => {
        console.log('[StreamingDAO addStreaming] error = ', error);
      });
      
      return pk;
    } catch (error) {
      console.log('[StreamingDAO insertStreaming] error = ', error);
    } finally {
      connection.end();
    }
  }

  async finishStreaming(streaming) {
    try {
      await connection.connect();

      const streamingStartTimeObject = moment(streaming.streamingStartTime, 'YYYY-MM-DD/HH:mm');
      const streamingEndTimeObject = moment();

      const duration = moment.duration(streamingEndTimeObject.diff(streamingStartTimeObject));
      const timeDiff = Math.floor(duration.asMinutes());

      const streamingSQL = 'UPDATE STREAMING SET USER_ID = ?, STREAMING_CATEGORY = ?, STREAMING_TITLE = ?, ' +
      'STREAMING_START_TIME = ?, STREAMING_END_TIME = ?, TOTAL_STREAMING_VIEWER = ? , RECORD_URL = ? WHERE STREAMING_NO = ?;';

      const param = [
        streaming.userId,
        streaming.streamingCategory,
        streaming.streamingTitle,
        streaming.streamingStartTime,
        moment().format('YYYY-MM-DD/HH:mm'),
        streaming.totalStreamingViewer,
        streaming.recordUrl,
        streaming.streamingPk
      ]

      console.log('[timeDiff] = ', timeDiff);
      console.log(param);
      const userSQL =  ` UPDATE USER SET ACCUMULATED_VIEWERS = ACCUMULATED_VIEWERS + ${streaming.totalStreamingViewer},`
                      + ` TOTAL_STREAMING_ACCUMULATED_TIME = TOTAL_STREAMING_ACCUMULATED_TIME + ${timeDiff} ;`

      const response = await new Promise((resolve, reject) => {
        connection.query(streamingSQL + userSQL, param, (error, result) => {
          if(error) {
            console.log('[StreamingDAO finishStreaming] error = ', error);
            resolve('fail');
          }else {
            resolve('success');
          }
        });
      })
       
    } catch (error) {
      console.log('[StreamingDAO finishStreaming] error = ', error);
    } finally {
      connection.end();
    }
  }

  async getStreamingByUserId(userId) {
    try {
      connection.connect();

      const sql = 'SELECT * FROM STREAMING WHERE USER_ID = ? ORDER BY STREAMING_START_TIME DESC';
      const param = [userId];

      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[StreamingDAO getStreaming] error = ', error);
            resolve('fail');
          }else {
            resolve(results);
          }
        });  
      });

      let response = [];
      if(result.length > 0) {
        for(const data of result) {
          response.push({...data});
        }
      }

      return response;
    } catch (error) {
      console.log('[StreamingDAO getStreaming] error = ', error);
      return 'fail';
    } finally {
      connection.end();
    }
  }

  async getStreamingByStreamingNo(streamingNo) {
    try {
      connection.connect();

      const sql = 'SELECT * FROM STREAMING WHERE STREAMING_NO = ?';
      const param = [streamingNo];

      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[StreamingDAO getStreaming] error = ', error);
            resolve('fail');
          }else {
            resolve(results);
          }
        });  
      });

      let response;
      if(result.length != 0) {
        response = {...result[0]};
      }

      return response;
    } catch (error) {
      console.log('[StreamingDAO getStreaming] error = ', error);
      return 'fail';
    } finally {
      connection.end();
    }
  }
}

module.exports = StreamingDAO;