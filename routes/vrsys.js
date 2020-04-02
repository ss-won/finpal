var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mysql = require('mysql');
var db_mysql = require('../db');
var auth = require('../auth');



router.use(express.urlencoded({extended: false}));

/**
 * Get path (/vrsys)
 */
router.get('/',(req,res,next)=>{
    // var id = req.params.id;
     let date = Date.now();
     console.log(date);
     var date_data = mysql.raw('')
     var sql = `select id,title,link,contents,date_format(issdate,'%Y-%m-%d') as date 
     ,datediff(now(),issdate) as daydiff, timestampdiff(hour,issdate,now()) as hour,
     timestampdiff(minute,issdate,now()) as min, timestampdiff(second,issdate,now()) as sec, writer_e, writer_n from board`;
     db_mysql.query(sql,(err,results)=>{
         if(err){ throw err;}
         res.render('vrsys',auth.authRender(req,res,{title:'VR system',lists:results,count:results.length}));
     })
     
 })

/**
 * Action Add
 */

//로그인 하지 않으면 add 할 수 없음
router.get('/add',(req,res)=>{
    if(auth.authUser(req,res)){
        res.render('add',auth.authRender(req,res,{title:'Add'}));
    }
    else{
        res.redirect('/users/login');
        return false;
    }
})

//writer에 본인 계정 추가하기
router.post('/add',(req,res)=>{
    var title = req.body.title;
    var desc = req.body.desc;
    var link = req.body.link;

    var URL = url.parse(link);
    var videoID = URL.pathname;
    var writer_e = req.session.email;
    var writer_n = req.session.nname;
    var sql = 'insert into board (title,link,contents,writer_e,writer_n) values(?,?,?,?,?)';

    console.log(title,desc,link);
    if(auth.authUser(req,res)){
    if(title==""||desc==""||link==""){
        res.render('add',{message:"빈 값을 입력하실 수 없습니다."})
    }
    else{
        db_mysql.query(sql,[title,videoID,desc,writer_e,writer_n],(err,results)=>{
            if(err) throw err;
            res.redirect('/vrsys');
            //res.send(results);
        });
    }
  }
  else{
      res.redirect('/users/login');
  }
})

/**
 * Action Edit
 */
// writer가 본인일 경우만 접근 허용(session email 확인)
router.get('/edit/:id',(req,res)=>{
    var id = req.params.id;
    var sql = 'select * from board where id= ?';
    if(auth.authUser(req,res)){
        db_mysql.query(sql,id,(err,result)=>{
            if(err){ throw err;}
            res.render('edit',auth.authRender(req,res,{edit:result[0]}))
            return 0;
        })
    }
    else{
        res.redirect('/users/login');
        return 0;
    }
    
})

router.post('/edit/:id',(req,res)=>{
    var id = req.params.id;
    var title = req.body.title;
    var desc = req.body.desc;
    var link = req.body.link;

    var user = req.session.email;
    var utype = req.session.utype;

    var URL = url.parse(link);
    var videoID = URL.pathname;
    var sqls = 'select * from board where id=?'
    var sqlu = 'update board set title=?,link=?,contents=? where id=?';
    if(auth.authUser(req,res)){
        db_mysql.query(sqls,id,(err,r)=>{
            console.log(r[0])
            console.log(user,utype)
            if(r[0].writer_e==user||utype=='a'){
                db_mysql.query(sqlu,[title,videoID,desc,id],(err,result)=>{
                    if(err) throw err;
                    res.json({text:'Success to edit',icon:'success'});
                })
            }
            else{
                res.json({text:"fail to edit",icon:"warning"});
                return false;
            }
        })
    }
    else{
        res.redirect('/users/login');
        return false;
    }
    
})
/**
 * Action Remove
 */
router.get('/remove:id',(req,res)=>{
    var id = req.params.id;
    var user = req.session.email;
    var ssql = 'select writer from ?? where id=?';
    var dsql = 'delete from ?? where id=?';
    if(auth.authUser(req,res)){
        db_mysql.query(dsql,['board',id],(err,dresult)=>{
            if(err) throw err;
            res.json({text:'Success to remove your post',icon:"success"});
        })
    }
    else{
        res.json({text:'Please login first!',icon:"warning"})
    }
})

router.post('/search',(req,res)=>{
    var query = req.query.input;
    console.log(query);
    var sql = `select id,title,link,contents,date_format(issdate,'%Y-%m-%d') as date 
    ,datediff(now(),issdate) as daydiff, timestampdiff(hour,issdate,now()) as hour,
    timestampdiff(minute,issdate,now()) as min, timestampdiff(second,issdate,now()) as sec, writer_e, writer_n 
    from ?? where title like '%${query}%' || contents like '%${query}%'`;
    db_mysql.query(sql,'board',(err,results)=>{
        if(err) throw err;
        res.render('vrsys',auth.authRender(req,res,{title:'VR system',lists:results,count:results.length,input:query}))
    })
})

module.exports = router;