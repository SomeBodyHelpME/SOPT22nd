function create() {
	return new Promise(function(resolve, reject) {
		resolve();
		console.log("1. resolve");
	});
};

create().then(function() {
	console.log("3. 성공");
	return new Promise(function(resolve, reject) {
		resolve();
		console.log("4. Second resolve");
	});
}, function() {
	console.log("3. 실패");
}).then(function() {
	console.log("5. 성공");
}, function() {
	console.log("5. 실패");
});
console.log("2. 끝");