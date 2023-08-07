const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');
const adService = new (require('./service/AdService'))();

//router 등록
const indexRouter = require('./routes/index');
const streamingRouter = require('./routes/StreamingRouter');
const adRouter = require('./routes/AdRouter');
const donationRouter = require('./routes/DonationRouter');
const reportRouter = require('./routes/ReportRouter');
const banRouter = require('./routes/BanRouter');
const userRouter = require('./routes/UserRouter');

//api 요청에 사용할 key
global.accessKey = 'z4Xcnb9Fi7MmuSeksVf4';
global.secretKey = 'nt9eOEVgBxjdmjqOgP9Xee44ADNmEDT171bekE2u';
global.clientId = 'ie3vug56gz';
global.clientSecret = 'HAqoUe2ZG2GxgZDVweFjB4DicnttKodNFP2yfp6y';
global.adCycle = 1000 * 60 * 60;

setInterval(async () => {
  await adService.removeAllLiveCurtain();
  try {
    await adService.playAd();  
  } catch (error) {
    console.log('[app.js setInterval] error = ', error);
  }
  
}, global.adCycle);

const app = express();

app.use(logger('dev'));
app.use(cors({
  origin: ['http://175.45.201.36', 'http://www.ssstvv.com', 'http://localhost:3000'], 
  credentials: true // withCredentials 활성화
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//라우터 경로
app.use('/', indexRouter);
app.use('/streaming', streamingRouter);
app.use('/ad', adRouter);
app.use('/donation', donationRouter);
app.use('/report', reportRouter);
app.use('/ban', banRouter);
app.use('/user', userRouter);


// 에러 핸들러
app.use(function(error, req, res, next) {
  console.log('[app.js] error = ', error);
  res.status(500).json({ error: 'Server Internal Error' });
});

module.exports = app;
