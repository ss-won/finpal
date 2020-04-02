var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db_mysql = require('../db');
var crypto = require('crypto');

router.use(express.urlencoded({extended: false}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',(req,res)=>{
  res.render('login',{pass:true,title:'Login'});
})

router.post('/login',(req,res)=>{
  var email = req.body.email;
  var pwd = req.body.pwd;
  console.log(email,pwd);
  var sql = "select * from ?? where email= ?";

  if(email==""||pwd==""){
    res.render('login',{pass:false,message:'빈 값을 입력하실 수 없습니다.'})
  }
  db_mysql.query(sql,['user',email],(err,result)=>{
      if(err){ console.log("err1");throw err;}
      //id is invalid
      if(!result[0])
          res.render('login',{pass:false,message:'please check your id'});
      //id is valid
      else{
          var user = result[0];
          crypto.pbkdf2(pwd,user.salt,100000,64,'sha512',(err,derivedKey)=>{
              if(derivedKey.toString('hex')==user.pwd){
              var time = new Date(Date.now());
              req.session.is_logined = true;
              req.session.email = result[0].email;
              req.session.name = result[0].name;
              req.session.nname = result[0].nname;
              req.session.utype = result[0].utype;
              req.session.time = time;
              //req.session.cookie.expires = new Date(Date.now()+time);
              //req.session.cookie.maxAge = time;
              req.session.save(()=>{
                res.redirect('/');
              }) 
              }
              else{
              res.render('login',{pass:false,message:'please check your password'});
              }
          })
      }  

  })
});

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect('/');
    })

})

router.get('/register',(req,res)=>{
  res.render('register',{pass:true,title:'Register'});
});

router.post('/register',(req,res)=>{
  var email = req.body.email;
  var name = req.body.name;
  var nname = req.body.nname;
  var pwd = req.body.pwd;
  var pwdck = req.body.pwdCheck

  var validEmail = "select email from user where email=?";

  // email(pk) 유일한 값인지 확인
  db_mysql.query(validEmail,email,(err,result)=>{
      if(err){ throw err; res.render('err');}
      if(result[0]){
          res.render('register',{pass:false,message:email+'this email is already registered'})
      }
  });
  
  //확인 후 table에 insert 하기
      var salt ='';
      var spwd ='';
  
      crypto.randomBytes(64, (err, buf) => {
          if(err){ throw err; res.render('err');}
          salt = buf.toString('hex');//16진수
          console.log("salt:"+ salt);
          //비밀번호 암호화
          crypto.pbkdf2(pwd, salt, 100000, 64, 'sha512', (err, derivedKey) => {
              if(err){ throw err; res.render('err');}
              spwd = derivedKey.toString('hex');
              console.log("spwd:"+ spwd);
              var sql = 'insert into user (name,nname,email,pwd,salt) values(?,?,?,?,?)';
                  db_mysql.query(sql,[name,nname,email,spwd,salt],(err,result)=>{
                  if(err){ throw err;}
                  res.redirect('/');
                  });
                  
          });
      });
  
})


module.exports = router;
