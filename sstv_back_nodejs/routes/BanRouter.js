const exprss = require('express');
const router = exprss.Router();
const banService = new (require('../service/BanService'))();
const Data = require('../model/Data');


router.post('/addStreamingRoleBan', async (req, res) => {
  try {
    const ban = req.body;
    console.log('[BanRouter /addStreamingRoleBan] ban = ', ban);
    const result = await banService.addStreamingRollBan(ban);
    
    let response;
    if(result == 'success') {
      response = new Data('success', '');
    }else {
      response = new Data('fail', '');
    }

    res.json(response);
  } catch (error) {
    console.log('[BanRouter /addStreamingRoleBan] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/removeStreamingRollBan', async (req, res) => {
  try {
    const userId = req.query.userId;
    const streamingRollBanNo = req.query.streamingRollBanNo;

    console.log('[BanRouter /removeStreamingRollBan] userId = ', userId);
    console.log('[BanRouter /removeStreamingRollBan] streamingRollBanNo = ', streamingRollBanNo);

    const result = await banService.removeStreamingRollBan(streamingRollBanNo, userId);

    let response;
    if(result == 'success') {
      response = new Data('success', '');
    }else {
      response = new Data('fail', '');
    }

    res.json(response);
  } catch (error) {
    console.log('[BanRouter /removeStreamingRollBan] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getStreamingRollBan', async (req, res) => {
  const streamingRollBanNo = req.query.streamingRollBanNo;

  const result = await banService.getStreamingRollBan(streamingRollBanNo);

  let response;
  if(result == 'fail') {
    response = new Data('fail', '');
  }else {
    response = new Data('success', result);
  }

  res.json(response);
});

router.get('/getStreamingRollBanList', async (req, res) => {
  try {
    const searchCondition = req.query.searchCondition;
    const searchKeyword = req.query.searchKeyword;
    console.log('[BanRouter /getStreamingRollBanList] searchCondition = ', searchCondition);
    console.log('[BanRouter /getStreamingRollBanList] searchKeyword = ', searchKeyword);

    const result = await banService.getStreamingRollBanList(searchCondition, searchKeyword);

    let response;
    if(result == 'fail') {
      response = new Data('fail', '');
    }else {
      response = new Data('success', result);
    }

    res.json(response); 
  } catch (error) {
    console.log('[BanRouter /getStreamingRollBanList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

/* 
0 : 관리자가 아닙니다.
1 : 서버에러
*/
router.post('/addStreamingBan', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const ban = req.body;  
    let response;
    
    const isAdmin = await banService.isAdmin(sessionId);
    if(isAdmin) {
      const result = await banService.addStreamingBan(ban);

      if(result == 'fail') {
        response = new Data('fail', '1');
      }else {
        response = new Data('success', '');
      }
    }else {
      response = new Data('fail', '0');
    }
    res.json(response);
  } catch (error) {
    console.log('[BanRouter /addStreamingBan] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getStreamingBan', async (req, res) => {
  const streamingNo = req.query.streamingNo;
  const result = await banService.getStreamingBan(streamingNo);

  let response;
  if(result == 'fail') {
    response = new Data('fail', '');
  }else {
    response = new Data('success', result);
  }

  res.json(response);
});

router.get('/getStreamingBanList', async (req, res) => {
  try {
    const searchCondition = req.query.searchCondition;
    const searchKeyword = req.query.searchKeyword;

    const result = await banService.getStreamingBanList(searchCondition, searchKeyword);

    let response;
    if(result == 'fail') {
      response = new Data('fail', '');
    }else {
      response = new Data('success', result);
    }

    res.json(response);
  } catch (error) {
    console.log('[BanRouter /getStreamingBanList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});
module.exports = router;