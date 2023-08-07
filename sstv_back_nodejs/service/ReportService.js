const reportDAO = new(require('../DAO/ReportDAO'))();
const Redis = require('../model/Redis');
class ReportService{

  async addReport(sessionId, report) {
    const user = await Redis.client.get(`${sessionId}_user`);

    let response;
    if(user) {
      const userId = JSON.parse(user).userId;
      report.userId = userId;
      
      const result = await reportDAO.addReport(report);
      response = result;
    }else {
      response = 'fail';
    }
    return response
  }

  async getReport(reportNo) {
    const report = await reportDAO.getReport(reportNo);
    return report
  }

  async getReportList(searchUserType, searchKeyword) {
    const reportList = await reportDAO.getReportList(searchUserType, searchKeyword);
    return reportList;
  }

  async removeReport(reportNo) {
    const result = await reportDAO.removeReport(reportNo);
    return result;
  }
}

module.exports = ReportService;