const connection = new (require('../model/MySQLConnection'))();


class DonationDAO {
  async addDonation(donation) {
    try {
      connection.connect();

      const sql = "INSERT INTO DONATION SET ?"
      const param = donation;

      const response = await new Promise((resolve, rejcet) => {
        connection.query(sql, param, (error, result) => {
          if(error) {
            console.log('[DonationDAO addDonation] error = ', error);
            resolve('fail');
          }else {
            resolve('success');
          }
        });
      }) 
    } catch (error) {
      console.log('[DonationDAO addDonation] error = ', error);
      return 'fail';
    } finally {
      connection.end();
    }
  }

  async getDonationList(userId) {
    try {
      connection.connect();

      let sql;
      const parma = [userId];

      if(userId) {
        sql = 'SELECT * FROM DONATION WHERE USER_ID = ?';
      }else {
        sql = 'SELECT * FROM DONATION';
      }

      let donationList = [];
      const result = await new Promise((resolve, reject) => {
        connection.query(sql, parma, (error, results) => {
          if(error) {
            console.log('[DonationDAO getDonationList] error = ' ,error );
          }else {
            resolve(results);
          }
        });
      });

      if(result.length > 0) {
        for(const data of result) {
          donationList.push({...data});
        }
      }
      

      return donationList;
    } catch (error) {
      console.log('[DonationDAO getDonationList] error = ' ,error );
    } finally {
      connection.end();
    }
  } 
}

module.exports = DonationDAO;