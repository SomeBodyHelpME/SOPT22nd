const http = require('http');

http.createServer(function(req, res) {
	let status = "ok"
	return new Promise((resolve, reject) => {
			if (status === "ok") resolve("ok");
			else reject("no");
		})
		.catch(err => {
			console.log("1st 실패 : ", err);
		})
		.then(param => {
			console.log("1st 성공 : ", param);
			let status = "ok";
			return new Promise((resolve, reject) => {
				if (status === "ok") resolve("ok");
				else reject("no");
			})
		})
		.catch(err => {
			console.log("2nd 실패 : ", err);
		})
		.then(param => {
			console.log("2nd 성공 : ", param);
			return new Promise((resolve, reject) => {
				res.writeHead(200, {
					"Content-Type" : "text/plain"
				});
				res.write("Successful Check Promise " + param);
				res.end();
			})
		});
}).listen(3000, function() {
	console.log("Connected 3000 port");
});
