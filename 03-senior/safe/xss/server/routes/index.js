var express = require('express');
var router = express.Router();
const comment = {

}

/* GET home page. */
router.get('/', function(req, res, next) {
    var xss = req.query.xss
    res.set('X-XSS-Protection',0)
    // res.set('X-XSS-Protection',1)
    // res.set('X-XSS-Protection','1;mode=block')
    // res.set('X-XSS-Protection','1; report=https://www.baidu.com')
    res.render('index', {title:'xss test', xss: xss });
});
router.get('/add',function(req,res){
    var val = req.query.val
    comment.val = val
    res.json({
        code:0,
        message:'添加评论成功'
    })
})

router.get('/get',function(req,res){
    res.json({
        code:0,
        message:'获取评论成功',
        data:comment.val
    })
})
module.exports = router;
