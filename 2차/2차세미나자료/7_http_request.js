const http = require('http');
const request = require('request');

const server = http.createServer(function(req,res) {
	let option = {
		uri : 'http://13.125.118.111:3000/test',
		method : 'GET'		//method 가 없으면 404로 뜨고, 다른 방식으로 접근할 경우에도 404 뜸!
	};

	request(option, function(err, response, body) {
		if (err) {
			console.log("Request module error : " + err);
			res.writeHead(500, {"Content-Type" : "text/plain"});
			res.end("Request module error!");
		} else {
			let bodyParsed = JSON.parse(body);

			console.log("body : " + body + ", type : " + typeof body);
			console.log("parsed : ", bodyParsed ,", type : " + typeof bodyParsed);
			console.log("Successfully get response");
			res.writeHead(200, {"Content-Type" : "text/plain"});
			res.end(bodyParsed.data);
		}
	});
}).listen(3000, function() {
	console.log('connected 3000 port!!');
});
