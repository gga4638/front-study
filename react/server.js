// cmd에서 node server.js
// 1. 서버 만들기 기본

// const http = require('http');   // 서버를 만드는 모듈 불러옴
// http.createServer((request, response) => {  // 서버 만드는 메소드
//     console.log('server start!');
//     return request
//         .on('error', (err) => {
//             console.error(err);
//         })
//         .on('data', (data) => {
//             console.log(data);
//         })
//         .on('end', () => {
//             response.on('error', (err) => {
//                 console.error(err);
//             });
//             response.statusCode = 200;
//             response.setHeader('Content-Type', 'text/plain');
//             response.write('hello world!\n');
//             response.end('the end!!!');
//         })
        
// }).listen(8080);


const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname;
}).listen('8080');