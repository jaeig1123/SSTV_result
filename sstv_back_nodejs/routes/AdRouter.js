const express = require('express');
const router = express.Router();
const path = require("path");
const {v4} = require('uuid');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const adService = new (require('../service/AdService'))();
const adRestDAO = new (require('../DAO/AdRestDAO'))();
const Data = require('../model/Data');
const AdDAO = require('../DAO/AdDAO');
let interval;


router.post('/addAdReq', upload.single('file'), (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const ext = path.extname(req.file.originalname);
    
    const uuid = v4();
    const file = req.file;
    const fileName = uuid + ext;
    
    adService.addAdReq(sessionId, file, fileName);

    const response = new Data('success', '');
    res.json(response);
  } catch (error) {
    console.log('[AdRouter /addAdReq] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/updateProcessCode', async (req, res) => {
  try {
    const processCode = req.query.processCode;
    const adReqNo = req.query.adReqNo;
    const denyCode = req.query.denyCode;
    
    console.log('[AdRouter /updateProcessCode] processCode = ', processCode);
    console.log('[AdRouter /updateProcessCode] adReqNo = ', adReqNo);
    console.log('[AdRouter /updateProcessCode] denyCode = ', denyCode);
    const result = await adService.updateProcessCode(adReqNo, processCode, denyCode);

    let response;
    if(result == 'success') {
      response = new Data('success', '');
    }else {
      response = new Data('fail', '');
    }

    return res.json(response);
  } catch (error) {
    console.log('[AdRouter /updateAdProcessCode] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getAdReqList', async (req, res) => {
  try {
    const searchKeyword = req.query.searchKeyword;
    const processCode = req.query.processCode;
    
    const list = await adService.getAdReqList(searchKeyword, processCode);

    console.log('[AdRouter /getAdReqList] searckKeyword', searchKeyword);
    console.log('[AdRouter /getAdReqList] processCode', processCode);
    console.log('[AdRouter /getAdReqList] list', list);

    res.json(new Data('success', list));
  } catch (error) {
    console.log('[AdRouter /getAdReqList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/playAd', (req, res) => {
  try {
    adService.playAd();
    res.json('test');
  } catch (error) {
    console.log('[AdRouter /getAdReqList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/removeAllLiveCurtain',async (req, res) => {
  try {
    await adService.removeAllLiveCurtain();
    res.json('삭제완료');
  } catch (error) {
    console.log('[AdRouter /getAdReqList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getAdList', async (req, res) => {
  try {
    const result = await adService.getAdList();

    let response;
    if(result != 'fail') {
      response = new Data('success', result);
    }else {
      response = new Data('fail', '');
    }

    return res.json(response);
  } catch (error) {
    console.log('[AdRouter /getAdList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
}); 

router.get('/updateAdCycle', async (req, res) => {
  try {
    const adCycle = req.query.adCycle;
    // global.adCycle = 1000 * 60 * Number(adCycle);

    if(interval) {
      clearInterval(interval);
    }

    interval = setTimeout(() => {
      adService.playAd();
    }, 1000 * 60 * adCycle);

    const response = new Data('success', '');
    res.json(response);
  } catch (error) {
    console.log('[AdRouter /updateAdCycle] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});
  
module.exports = router;