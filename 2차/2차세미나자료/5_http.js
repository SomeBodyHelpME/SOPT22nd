const http = require('http');

const server = http.createServer();

server.listen(3000);

// 현재 서버가 열려 있지만, 이 서버에 들어갔을 때 어떻게 처리할 것인지에 관한 코드가 없음 
// 따라서 localhost:3000 에 접속하더라도 아무 내용이 없는 페이지가 뜬다. 