var express=require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
require('superagent-charset')(superagent);


var app=new express();

app.get('/',function(req,res){

 superagent.get('http://cn.made-in-china.com/nmEJVvWbTxcu-gongsi-1.html').charset('gbk')
    .end(function(err,sres){
        if(err){
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#inquiryForm a').each(function(i,n){
           var $n=$(n);
            items.push({
                comanyname:$n.attr('title'),
                href:$n.attr('href')

            })
        })
        res.send(items);
    })
});
 app.listen(3000,function(req,res){
     console.log("app runing at port 3000");
 })