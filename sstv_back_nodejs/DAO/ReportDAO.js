const connection = new (require('../model/MySQLConnection'))();
const moment = require('moment');

class ReportDAO {
  
  async addReport (report) {
    try {
      connection.connect();

      const sql = 'INSERT INTO REPORT SET ?'
      const param = {
        STREAMING_NO : report.streamingNo,
        USER_ID : report.userId,
        STREAMING_USER_ID : report.streamingUserId,
        REPORT_TYPE : report.reportType,
        REPORT_CONTENT : report.reportContent,
        REPORT_DATE : moment().format('YYYY-MM-DD/HH:mm')
      }

      const response = await new Promise((resolve, rejcet) => {
        connection.query(sql, param, (error, result) => {
          if(error) {
            console.log('[ReportDAO addReport] error = ', error);
            resolve('fail');
          }else {
            resolve('success');
          }
        });
      })
      

      return response;
    } catch (error) {
      console.log('[ReportDAO addReport] error = ', error);
    } finally {
      connection.end();
    }
  }

  async getReport(reportNo) {
    try {
      connection.connect();

      const sql = 'SELECT * FROM REPORT WHERE REPORT_NO = ?';
      const param = [reportNo];

      
      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[ReportDAO getReport] error = ',error);
            resolve('fail');
          } 

          if(results.length > 0) {
            resolve({...results[0]});
          }else {
            resolve('fail');
          }
        });
      });

      return result;
    } catch (error) {
      console.log('[ReportDAO getReport] error = ', error);
    } finally {
      connection.end();
    }
  }

  async getReportList(searchUserType, searchKeyword) {
    try {
      connection.connect();
      
      let sql =  'SELECT R.REPORT_NO, R.STREAMING_NO, R.USER_ID, R.STREAMING_USER_ID, R.REPORT_TYPE, R.REPORT_CONTENT, '
                  + 'S.STREAMING_TITLE, S.STREAMING_CATEGORY, DATE_FORMAT(S.STREAMING_START_TIME, "%Y-%m-%d / %H:%i") AS STREAMING_START_TIME, '
                  + ' DATE_FORMAT(R.REPORT_DATE, "%Y-%m-%d / %H:%i") AS REPORT_DATE FROM REPORT R, STREAMING S'
                  + ' WHERE R.STREAMING_NO = S.STREAMING_NO'
      let param = [];


      if(searchUserType && searchKeyword) {
        //0 : 신고자(USER_ID), 1 : 피신고자(STREAMING_USER_ID)
        if(searchUserType == '0') {
          sql = sql + ` AND R.USER_ID LIKE '%${searchKeyword}%'`;  
        }else {
          sql = sql + ` AND R.STREAMING_USER_ID LIKE '%${searchKeyword}%'`;  
        }
      }

      sql = sql + ' ORDER BY REPORT_DATE DESC';
      console.log('[ReportDAO getReportList] sql = ', sql);
      const result = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            console.log('[ReportDAO getReportList] error = ',error);
            resolve('fail');
          }else {
            resolve(results);
          }
        });
      })
      
      let response;
      if(result != 'fail') {
        response = result.map(row => ({ ...row }));
      }      
      return response;
    } catch (error) {
      console.log('[ReportDAO getReportList] error = ', error);
    } finally {
      connection.end();
    }
  }
  
  async removeReport(reportNo) {
    try {
      connection.connect();

      const sql = 'DELETE FROM REPORT WHERE REPORT_NO = ?';
      const param = [reportNo];

      const response = await new Promise((resolve, reject) => {
        connection.query(sql, param, (error, results) => {
          if(error) {
            resolve('fail');
          }else {
            resolve('success');
          }
        }); 
      }); 
      
      return response;
    } catch (error) {
      console.log('[ReportDAO removeReport] error = ', error);
    } finally {
      connection.end();
    }
  }
}

module.exports = ReportDAO;