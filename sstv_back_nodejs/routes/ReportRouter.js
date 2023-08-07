const express = require('express');
const router = express.Router();
const reportService = new(require('../service/ReportService'))();
const moment = require('moment');
const Data = require('../model/Data');

router.post('/addReport', async (req, res) => {
  console.log('[init addReport]');
  const sessionId = req.cookies.NSESSIONID;
  const report = req.body;

  console.log('[ReportRouter /addReport] report = ', report);
  const result = await reportService.addReport(sessionId , report);

  let response;
  console.log(result);
  if(result == 'success') {
    response = new Data('success','');
  }

  if(result == 'fail') {
    response = new Data('fail','');
  }
   
  res.json(response);
});

router.get('/getReport', async (req, res) => {
  const reportNo = req.query.reportNo;

  const report = await reportService.getReport(reportNo);
  
  let response;
  if(report == 'fail') {
    response = new Data('fail','');
  }else {
    response = new Data('success',response);
  }

  res.json(response);
});

router.get('/getReportList', async (req, res) => {
  try {
    const searchUserType = req.query.searchUserType;
    const searchKeyword = req.query.searchKeyword;

    const result = await reportService.getReportList(searchUserType, searchKeyword);

    let response;
    if(result == 'fail') {
      response = new Data('fail','');
    }else {
      response = new Data('success',result);
    }

    res.json(response);
  } catch (error) {
    console.log('[ReportRouter getReportList] error = ', error);
    res.json(new Data('fail',''));
  }
});

router.get('/removeReport', async (req, res) => {
  try {
    const reportNo = req.query.reportNo
    const result = await reportService.removeReport(reportNo);
  
    let response;
    if(result == 'fail') {
      response = new Data('fail','');
    }else {
      response = new Data('success','');
    }
    res.json(response);
  } catch (error) {
    console.log('[ReportRouter /removeReport] error = ', error);
    response = new Data('fail','');
  }
});

module.exports = router;