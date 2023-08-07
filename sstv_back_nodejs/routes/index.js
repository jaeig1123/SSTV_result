var express = require('express');
var router = express.Router();
var {v4} = require('uuid');
var Redis = require('../model/Redis');
var Data = require('../model/Data');

/* GET home page. */
router.post('/testLogin', async (req, res, next) => {
  try {
    const user = req.body;

    if(user){
      const sessionId = req.cookies.NSESSIONID;
      console.log('[index.js /testLogin] sessionId = ', sessionId);
      
      if(sessionId == null || sessionId == undefined) {
        const sessionId = v4();

        await Redis.client.set(sessionId + '_user', JSON.stringify(user));
        // res.cookie('NSESSIONID', sessionId, 
        // { 
        //   httpOnly: false, maxAge: 7 * 24 * 60 * 60 * 1000 ,
        //   // sameSite: 'None'
        // });
        // res.setHeader('Set-Cookie', [`NSESSIONID=${sessionId}; HttpOnly=false; Max-Age=${7 * 24 * 60 * 60 * 1000}; Domain=ssstvv.com`]);
        res.setHeader('Set-Cookie', [`NSESSIONID=${sessionId}; HttpOnly=false; Max-Age=${7 * 24 * 60 * 60 * 1000};`]);

        res.json(new Data('success', ''));
        return;
      }
    }
  } catch(error) {
    console.log('[index.js /login] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }  
});

router.get('/testLogout', (req, res) => {
  try {
    const sessionId = req.cookies.NSESSIONID;
    console.log('[index.js /testLogout] sessionId = ', sessionId);

    if(sessionId) {
      Redis.client.del(sessionId + '_user');
      res.clearCookie('NSESSIONID', { path: '/' });
    }
    
    res.json(new Data('success', ''));
  } catch (error) {
    console.log('[index.js /testLogout] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});

//테스트를 위해 임시로 로그인 시키기
router.post('/addCookie', async (req, res) => {
  const user = req.body.data;
  
  try {
    const sessionId = req.cookies.NSESSIONID;
    if(sessionId == null || sessionId == undefined) {
      const sessionId = v4();

      //임시 유저
      await Redis.client.set(sessionId + '_user', JSON.stringify(user));
      res.json(sessionId);
      return;
    }

    res.json(sessionId);
  } catch(error) {
    console.log('[index.js /login] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }    
});

module.exports = router;
