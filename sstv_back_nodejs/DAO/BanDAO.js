const connection = new(require('../model/MySQLConnection'))();
const moment = require('moment');

class BanDAO {
  async addStreamingRollBan(ban) {
    try {
      connection.connect();

      const sql = 'INSERT INTO STREAMING_ROLE_BAN SET ?'
      const param = {
        USER_ID : ban.userId,
        BAN_START_DATE : moment().format('YYYY-MM-DD/HH:mm'),
        BAN_END_DATE : moment().add(ban.banPeriod, 'days').format('YYYY-MM-DD/HH:mm'),
        BAN_TYPE : ban.banType,
        BAN_CONTENT : ban.banContent
      }

      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            resolve('fail');
          }else {
            resolve('success');
          }
        });
      });
      
      return result;
    } catch (error) {
      console.log('[BanDAO addBan] error = ', error);
    }
  }

  async removeStreamingRollBan(streamingRollBanNo, userId) {
    try {
      connection.connect();

      if(streamingRollBanNo && userId) {
        const removeSQL = `DELETE FROM STREAMING_ROLE_BAN WHERE STREAMING_ROLE_BAN_NO = ${streamingRollBanNo}; `;  
        const updateSQL = ` UPDATE USER SET ST_ROLL = 0 WHERE USER_ID = '${userId}'`;
        const param = [];
  
        const result = await new Promise((resolve, rejcet) => {
          connection.query((removeSQL + updateSQL), param, (error, results) => {
            if(error) {
              console.log('[BanDAO removeStreamingRollBan] error = ', error);
              resolve('fail')
            }else {
              resolve('success');
            }
          });
        });

        return result;
      }else {
        return 'fail';
      }

    } catch (error) {
      console.log('[BanDAO removeStreamingRollBan] error = ', error);
    }
  }

  //0 : 회원 아이디, 1: 회원 닉네임
  async getStreamingRollBanList(searchCondition, searchKeyword) {
    try {
      connection.connect();
      
      let sql = 'SELECT B.STREAMING_ROLE_BAN_NO, B.USER_ID, B.BAN_TYPE, B.BAN_CONTENT'
                  + ', DATE_FORMAT(B.BAN_START_DATE, "%Y-%m-%d / %H:%i") AS BAN_START_DATE'
                  + ', DATE_FORMAT(B.BAN_END_DATE, "%Y-%m-%d / %H:%i") AS BAN_END_DATE, U.*'
                  + ' FROM STREAMING_ROLE_BAN B, USER U'
                  + ' WHERE B.USER_ID = U.USER_ID'
      const param = [];

      if(searchCondition == '0' && searchKeyword) {
        sql = sql + ` AND U.USER_ID LIKE '%${searchKeyword}%'`
      }

      if(searchCondition == '1' && searchKeyword) {
        sql = sql + ` AND U.USER_NICKNAME LIKE '%${searchKeyword}%'`
      }

      sql = sql + ' ORDER BY BAN_START_DATE DESC'
      const result = await new Promise((resolve, rejcet) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            resolve('fail');
          }else {
            resolve(results);
          }
        });
      });

      let response = [];
      if(result && result.length > 0) {
        for(const data of result) {
          response.push({...data});
        }
      }
      
      return response;
    } catch (error) {
      console.log('[BanDAO getBanList] error = ', error);
    }
  }

  async getStreamingRollBan(streamingRollBanNo) {
    try {
      connection.connect();

      const sql = 'SELECT * FROM STREAMING_ROLE_BAN WHERE STREAMING_ROLE_BAN_NO = ?';
      const param = [streamingRollBanNo];

      const result = await new Promise((resolve, rejcet) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            resolve('fail');
          }else {
            resolve(results);
          }
        });
      });

      let response;
      console.log('[BanDAO getStreamingRoleBan] result = ', result);
      if(result.length > 0) {
        response = {...result[0]};
      }
      
      return response;
    } catch (error) {
      console.log('[BanDAO getStreamingRollBan] error = ',error);
    }
  }

  async addStreamingBan(streaming) {
    try {
      connection.connect();

      let currentTime = moment().format('YYYY-MM-DD/HH:mm');

      const sql = 'UPDATE STREAMING SET BAN_TYPE = ?, BAN_CONTENT = ?, BAN_DATE = ? ' + 
      ', STREAMING_TITLE = ?, STREAMING_CATEGORY = ?, STREAMING_START_TIME = ?, STREAMING_END_TIME = ? ' + 
       ', TOTAL_STREAMING_VIEWER = ? WHERE STREAMING_NO = ?';
      const param = [
        streaming.banType, 
        streaming.banContent, 
        currentTime, 
        streaming.streamingTitle,
        streaming.streamingCategory,
        streaming.streamingStartTime,
        currentTime,
        streaming.totalStreamingViewer,
        streaming.streamingPk
      ];

      const result = await new Promise((resolve, rejcet) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[BanDAO addStreamingBan] error = ', error);
            resolve('fail');
          } else {
            resolve('success');
          }
        });
      });
      return result;
    } catch (error) {
      console.log('[BanDAO addStreamingBan] error = ', error);
    } finally {
      connection.end();
    }
  }

  async getStreamingBanList(searchCondition, searchKeyword) {
    try {
      connection.connect();

      let sql = 'SELECT S.STREAMING_NO, S.USER_ID, U.USER_NICKNAME, U.USER_NAME, S.STREAMING_CATEGORY, S.STREAMING_TITLE'
                  + ', DATE_FORMAT(S.STREAMING_START_TIME, "%Y-%m-%d / %H:%i") AS STREAMING_START_TIME, DATE_FORMAT(S.STREAMING_END_TIME, "%Y-%m-%d / %H:%i") AS STREAMING_END_TIME'
                  + ', S.TOTAL_STREAMING_VIEWER, S.BAN_TYPE, S.BAN_CONTENT, DATE_FORMAT(S.BAN_DATE,"%Y-%m-%d / %H:%i") AS BAN_DATE'
                  + ', (SELECT SUM(DONATION_AMOUNT) FROM DONATION WHERE STREAMING_NO = S.STREAMING_NO) AS DONATION_AMOUNT'
                  + ' FROM STREAMING S, USER U, DONATION D WHERE S.USER_ID = U.USER_ID AND S.STREAMING_NO = D.STREAMING_NO AND S.BAN_TYPE IS NOT NULL';
      
      
      const param = [];

      if(searchCondition == '0' && searchKeyword) {
        sql = sql + ` AND U.USER_NICKNAME LIKE '%${searchKeyword}%'`;
      }

      if(searchCondition == '1' && searchKeyword) {
        sql = sql + ` AND S.STREAMING_TITLE LIKE '%${searchKeyword}%'`;
      }

      sql = sql + ' ORDER BY S.BAN_DATE DESC';

      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[BanDAO getStreamingBanList] error = ', error);
            resolve('fail');
          }else {
            resolve(results);
          }
        });  
      });

      const response = [];
      if(result && result.length > 0) {
        for(const data of result) {
          response.push({...data});
        }
      }

      return response;
    } catch (error) {
      console.log('[BanDAO getStreamingBanList] error = ', error);
    } finally {
      connection.end();
    }
  }
}
module.exports = BanDAO;