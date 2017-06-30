var async= require('async');
var t = require('./t');
var log = t.log;
var arr = [{name:'Jack', delay:200}, {name:'Mike', delay: 100}, {name:'Freewind', delay:300}, {name:'Test', delay: 50}];
async.mapSeries(arr, function(item, callback) {
    log('1.4 enter: ' + item.name);
    setTimeout(function() {
        log('1.4 handle: ' + item.name);
        if(item.name==='Mike') callback('myerr');
        else callback(null, item.name+'!!!');
    }, item.delay);
}, function(err, results) {
    log('1.4 err: ', err);
    log('1.4 results: ', results);
});

