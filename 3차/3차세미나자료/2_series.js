const async = require('async');

console.log('Program Start!');

let taskArray = [
	function (callback) {
		console.log('First step --> ');
		callback(null, '1', '2');
	},
	function (callback) {
		console.log('Second step --> ');
		callback(null, '3');
	},
	function (callback) {
		console.log('Third step --> ');
		callback(null, 'Finish');
	}
];

async.series(taskArray, function(err, result) {
	if (err) {
		console.log('Error : ' + err);
	} else {
		console.log('Result : ' + result);
	}
});
console.log('Program End!');
