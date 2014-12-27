var Quandl = require('quandl');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var quandl = new Quandl({
    auth_token: '8ynsN6pzeBEjygp2sZGk',
    api_version: 1,
});

quandl.metadata({source: 'WIKI', table: 'AAPL', format: 'JSON'}, function(err, res){
    if (err) {throw err};
    jsonRes = JSON.parse(res);
    console.log(jsonRes);
    console.log('meta')
});

quandl.dataset({ source: 'WIKI', table: 'AAPL', format: 'JSON' }, function(err, res) {
    if (err) {throw err;}
    jsonRes = JSON.parse(res);
    console.log(jsonRes.data[10]);
})




