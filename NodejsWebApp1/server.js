'use strict';
var http = require('http');
var port = process.env.PORT || 8080;

var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var now = new Date();
var dayofweek = now.getDay();
var url = new URL('https://vk.com/home?name=Ilya');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ' + url.searchParams.get('name') + ', today is ' + days[dayofweek]);
}).listen(port);
