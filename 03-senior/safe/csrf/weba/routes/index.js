var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  var token = parseInt(Math.random()*10000)
  req.session.userInfo = {
    id:123,
    token:token
  }
  res.json({
    code:0,
    message:"登录成功",
    token:token
  })
});
router.get('/logout', function(req, res, next) {
req.session.destroy()
  res.json({
    code:0,
    message:"退出成功"
  })
});
module.exports = router;
