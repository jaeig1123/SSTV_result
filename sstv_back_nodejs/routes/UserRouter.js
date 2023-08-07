const express = require('express');
const router = express.Router();
const userService = new (require('../service/UserService'))();
const Data = require('../model/Data');



router.get('/getAdminUserList', async (req, res) => {
  try {
    const searchCondition = req.query.searchCondition;
    const searchKeyword = req.query.searchKeyword;

    const response = await userService.getAdminUserList(searchCondition, searchKeyword);
    
    let result;
    if(response == 'fail') {
      result = new Data('fail', '');
    }else {
      result = new Data('success', response);
    }

    res.json(result);
  } catch (error) {
    console.log('[UserRouter /getAdmingUserList] error = ', error);
    res.status(500).json({ error: 'Server Internal Error' });
  }
});  
module.exports = router;