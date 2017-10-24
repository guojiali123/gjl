var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
var n=0;
router.get('/', function(req, res, next) {
  res.render('index', { title: n });
  fs.readFile("gjl.txt","utf-8",function(err,data){
  	n++;
  	fs.writeFile("guo.txt","当前页面被访问的次数:"+n)
  })
});

module.exports = router;
