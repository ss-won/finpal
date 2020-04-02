var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mysql = require('mysql');
var db_mysql = require('../db');
var auth = require('../auth');



router.use(express.urlencoded({extended: false}));

router.get('/',(req,res,next)=>{
    res.render('protrade',auth.authRender(req,res,{title:"Proprietary Trading"}));
 })

router.post('/input',(req,res)=>{
    var input = req.body.input;
    var date = req.body.date;
    var data = `{"x":${date},"y":${input}}`;
    console.log(input,date);
    var sql = "insert into protrade (id,data) values(?,?)";
    db_mysql.query(sql,[date,data],(err,result)=>{
        console.log(result[0]);
        res.redirect('/prop');
    })
})

 module.exports = router;