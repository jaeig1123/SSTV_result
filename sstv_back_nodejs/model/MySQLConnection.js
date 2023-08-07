const mysql = require('mysql');

class MySQLConnection {
  constructor() {
    this.config = {
      host: '175.45.194.89',
      port : '3306',
      user: 'LDW',
      password: 'LDW',
      database: 'sstv',
      multipleStatements: true
    },

    this.connection = null;
  }

  connect() {
    try {
      this.connection = mysql.createPool(this.config);
    
      // this.connection.connect((error) => {
      //   if(error) {
      //     console.log('[MySQLConnection connect] error = ', error);
      //   }
      // });
    } catch (error) {
      console.log('[MySQLConnetcion connect] error = ', error);
    }
  }

  // disconnect() {
    // try {
    //   if(this.connection) {
    //     this.connection.end();
    //     console.log('[MySQLConnection disconnect] Close Connection');
    //   }  
    // } catch (error) {
    //   console.log('[MySQLConnection disconnect] error = ', error);
    // }
  // }

  query(sql, params, callback) {
    try {
      if(!this.connection) {
        console.log('[MySQLConnection query] No Connection');
        return;
      }
  
      this.connection.query(sql, params, (error, result) => {
        if(error) {
          console.log('[MySQLConnection query] error = ', error);
          callback(error, null);
        } else {
          callback(null, result);
        }
      });
    } catch (error) {
      console.log('[MySQLConnetcion query] error = ', error);
    }
  }

  format (sql, params) {
    try {
      const result = mysql.format(sql, params);

      return result;
    } catch (error) {
      console.log('[MySQLConnetcion query] format = ', error);
    }
  }

  end() {
    try {
      if(this.connection) {
        this.connection.end((error) => {
          if(error) {
            console.log('[MySQLConnection end] error1 = ', error);
          }
        })
      }
    } catch (error) {
      console.log('[MySQLConnection end] error2 = ', error);
    }
  }
}

module.exports = MySQLConnection;