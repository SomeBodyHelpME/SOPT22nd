const url = require('url');
const querystring = require('querystring');

let urlPath = 'https://www.google.co.kr/search?q=node.js&oq=node.js&aqs=chrome..69i57j69i60j69i61l2j69i65l2.1366j0j1&sourceid=chrome&ie=UTF-8';

let urlParsed = url.parse(urlPath);
let queryParsed = querystring.parse(urlParsed.query);

console.log('urlParsed :', urlParsed);

console.log('queryParsed :', queryParsed);