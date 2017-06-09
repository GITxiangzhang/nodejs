//引入模块
var express= require("express");
var utility= require("utility");
//新建express实例
var app= new express();
app.get('/',function(req,res){
    //通过req.query对象获取q
    var q=req.query.q;
    if(q){
        var md5q=utility.md5(q);
        res.send(md5q);
    }else{
        res.send("没有参数");
    }
})
app.listen(3000,function(eq,res){
console.log('app is running at port 3000');
})