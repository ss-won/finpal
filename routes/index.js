var express = require('express');
var router = express.Router();
var auth = require('../auth');


//로그인이 되어 있으면(세션유지중이면) logout 띄우기

//로그아웃하면 세션 폐기하기


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',auth.authRender(req,res,{title:"Home"}));
});

router.get('/aboutus', function(req, res) {
  res.render('aboutus', auth.authRender(req,res,{title:"About Us"}));
});

router.get('/algorithm', function(req, res){
  res.render('algorithm',auth.authRender(req,res,{title:"Algorithm"}));
})


router.get('/shop', function(req, res){
  res.render('shop',auth.authRender(req,res,{title:"Shop"}));
})
module.exports = router;
