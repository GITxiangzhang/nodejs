var eventproxy= require('eventproxy');
var superagent=require('superagent');
require('superagent-charset')(superagent);
var cheerio=require('cheerio');
var url=require('url');

var testurl="http://cn.made-in-china.com/nmEJVvWbTxcu-gongsi-1.html";

superagent.get(testurl).charset('gbk').end(function(err,res){
    if(err){
        return console.log(err);
    }

    var zstURLs=[];
    var $=cheerio.load(res.text)
    $('.co-name a').each(function(i,n){
        var $n=$(n);
        zstURLs.push($n.attr('href'))
    })

    console.log(zstURLs.length)

    var ep=new eventproxy();

    ep.after('zst',zstURLs.length,function (topics) {
        var topics=topics.map(function (i,n) {
            var companyurl=i[0];
            var companyhtml=i[1];
            var $=cheerio.load(companyhtml);
            return({
                comname:$('.companyName h1').text().trim(),
                url:companyurl,
                boss:$('.flu-name').text().trim()
            })
        })
        console.log(topics);

    })



    zstURLs.forEach(function (zstURL) {
        superagent.get(zstURL).charset('gbk').end(function (err,res) {
            if(err){
                return console.log(err);
            }
            ep.emit('zst',[zstURL,res.text])
        })

    })

});
