var express = require('express');
var router = express.Router();
const StreamingService = require('../service/StreamingService');
const streamingService = new StreamingService();
var Data = require('../model/Data');
const { DATE } = require('mysql/lib/protocol/constants/types');


/* 

  {result : success, data : 0} : 스트리밍 시작 가능
  {result : fail, data : 1} : 로그인 필요
  {result : fail, data : 2} : 이미 스트리밍중
  {result : fail, data : 3} : 스트리밍 권한 정지
*/
router.get('/addStreaming', async (req, res, next) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const resultCode =  await streamingService.validateAddStreaming(sessionId);

    switch (resultCode) {
      case 0:
        response = new Data('success', 0);
        break;

      case 1:
        response = new Data('fail', 1);
        break;

      case 2:
        response = new Data('fail', 2);
        break;

      case 3:
        response = new Data('fail', 3);
        break;
    }

    res.json(JSON.stringify(response));
  } catch (error) {
    console.log('[StremaingRouter /addStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.post('/addStreaming', async (req, res) => {
  try {
    const streamingTitle = req.body.streamingTitle;
    const category = req.body.streamingCategory;
    const sessionId = req.cookies.NSESSIONID;
    
    console.log('[Streaming /addStreaming] streamingTitle = ', streamingTitle);
    console.log('[Streaming /addStreaming] category = ', category);
    console.log('[Streaming /addStreaming] sessionId = ', sessionId);
    const result = await streamingService.addStreaming(streamingTitle, true, category, sessionId);

    if(result == 'success') {
      response = new Data('success', '');
    } else {
      response = new Data('fail', '');
    }
    
    response = new Data('success', '');
    res.json(JSON.stringify(response));
  } catch (error) {
    console.log('[StreamingRouter /addStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getServiceUrl', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID
    const serviceUrl = await streamingService.getServiceUrlAndThumbnail(sessionId);

    console.log('[StreamingRouter /getServiceUrl] serviceUrl = ', serviceUrl);

    if(serviceUrl == 'fail') {
      response = new Data('fail', '');
      res.json(JSON.stringify(response));
      return;
    }
    
    if(serviceUrl == 'success') {
      response = new Data('success', '');
      res.json(JSON.stringify(response));
      return;
    }
  } catch (error) {
    console.log('[StreamingRouter /getServiceUrl] error = ', error);
    response = new Data('fail', '');
    res.json(JSON.stringify(response));
  }
});

router.get('/getMyStreamingPage', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const _onStreaming =  await streamingService.getMyStreamingPage(sessionId);

    resposne = new Data('success', _onStreaming, _onStreaming.serviceUrlWithOutAd);
    res.json(resposne);
  } catch (error) {
    console.log('[Streaming Router /getMyStreamingPage] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getMyOnGoingStreamingPage', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    console.log('[Streaming Router /getMyOnGoingStreamingPage] sessionId = ', sessionId);

    const {streaming, serviceUrl} = await streamingService.getMyOnGoingStreamingPage(sessionId);

    res.json(new Data('success', streaming ,serviceUrl));
  } catch (error) {
    console.log('[Streaming Router /getMyOnGoingStreamingPage] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
})

router.get('/getStreamingViewerPage', async (req, res) => {
  try {
    const streamingUserId = req.query.streamingUserId;
    const sessionId = req.cookies.NSESSIONID;

    let response
    if(sessionId) {
      const result = await streamingService.getStreamingViewerPage(sessionId, streamingUserId);

      response = new Data('success', result.streaming, result.serviceUrl);
      if(result == '1') {
        response = new Data('fail', '1');
      }
      if(result == '2') {
        response = new Data('fail', '2');
      }
    } else {
      const result = await streamingService.nonUserGetStreamingViewerPage(streamingUserId);
      response = new Data('success', result.streaming, result.serviceUrl);
    }

    res.json(response);
  } catch (error) {
    console.log('[Streaming Router /getStreamingViewerPage] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

/* 
  searchCondition 0 : 시청자 높은순
  searchCondition 1 : 시청자 낮은순
  searchKeywork : 스트리밍 제목 or 회원 닉네임
*/
router.get('/getStreamingList', async (req, res) => {
  try {
    const searchCondition = req.query.searchCondition;
    const searchKeyword = req.query.searchKeyword;
    
    const streamingList = await streamingService.getStreamingList(searchCondition, searchKeyword);
    
    console.log('[StreamingRouter /getStreamingList] streamingList = ', streamingList);
    res.json(new Data('success', streamingList));
  } catch (error) {
    console.error('[StreamingRouter /getStreamingList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/updateStreamingTitleAndCategory', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const streamingTitle =  req.query.streamingTitle;
    const streamingCategory = req.query.streamingCategory;
    const streamingUserId = req.query.streamingUserId;

    const streamingTitleResult = await streamingService.updateStreamingTitle(sessionId, streamingTitle, streamingUserId);
    const streamingCategoryResult = await streamingService.updateStreamingCategory(sessionId, streamingCategory,streamingUserId);
    
    let response;
    if((streamingTitleResult == 'success') && (streamingCategoryResult == 'success')) {
      response = new Data('success', '');
    } else {
      response = new Data('fail','');
    }
    
    res.json(response);
  } catch (error) {
    console.log('[StreamingRouter /updateStreamingtitle] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/finishStreaming', async (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    const streamingUserId = req.query.streamingUserId
    
    const result =  await streamingService.finishStreaming(sessionId, streamingUserId);

    let response;
    if(result != 'fail') {
      response = new Data('success', result);
      streamingService.delStreaming(sessionId);
    }else {
      response = new Data('fail', '');
    }
    res.json(response);
  } catch (error) {
    console.log('[StreamingRouter /removeStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/finishRecord', async (req, res) => {
  try {
    const streamingUserId = req.query.streamingUserId;
    const result = await streamingService.finishRecord(streamingUserId);
    console.log('[StreamingRouter /finishRecord] result = ', result);  

  } catch (error) {
    console.log('[StreamingRouter /finishStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
  
});

router.get('/getAdminStreamingList', async (req, res) => {
  try {
    const searchKeyword = req.query.searchKeyword;
    const searchCondition = req.query.searchCondition;

    const result = await streamingService.getAdminStreamingList(searchCondition, searchKeyword);

    let response;
    if(result == 'fail') {
      response = new Data('fail', '');
    }else {
      response = new Data('success', result);
    }

    res.json(response);
  } catch (error) {
    console.log('[StreamingRouter /getAdminStreamingList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getStreamingByUserId', async (req, res) => {
  try {
    const userId =  req.query.userId;
    const result = await streamingService.getStreamingByUserId(userId);

    let resposne;
    if(result == 'fail') {
      resposne = new Data('fail', '');
    }else {
      resposne = new Data('success', result);
    }

    res.json(resposne);
  } catch (error) {
    console.log('[StreamingRouter /getStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getStreamingByStreamingNo', async (req, res) => {
  try {
    const streamingNo = req.query.streamingNo;
    const result = await streamingService.getStreamingByStreamingNo(streamingNo);

    let resposne;
    if(result == 'fail') {
      resposne = new Data('fail', '');
    }else {
      resposne = new Data('success', result);
    }

    res.json(resposne);
  } catch (error) {
    console.log('[StreamingRouter /getStreaming] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

router.get('/getOnGoingStreamingByUserId', async (req, res) => {
  try {
    const userId = req.query.userId;
    const result = await streamingService.getOnGoingStreamingByUserId(userId);

    console.log('[StreamingRouter /getOnGoingStreamingByUserId] userId = ', userId);
    
    let response
    if(result == 'fail') {
      response = new Data('fail', '');
    }
    response = new Data('success', result);
    res.json(response);
  } catch (error) {
    console.log('[StreamingRouter /getOnGoingStreamingByUserId] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

module.exports = router;
