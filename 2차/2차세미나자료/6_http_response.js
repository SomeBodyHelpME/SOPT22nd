const http = require('http');

const server = http.createServer(function(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.write('Hello World\n');
	res.end();
}).listen(3000, function() {
	console.log('connected 3000 port!!');
});