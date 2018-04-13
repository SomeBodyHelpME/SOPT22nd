const async = require('async');

console.log('Program Start!');

let taskArray = [
	function (callback) {
		console.log('First step --> ');
		callback(null, '1', '2');
	},
	function (arg1, arg2, callback) {
		console.log('Second step --> ' + arg1 + ' ' + arg2);
		callback(null, '3');
	},
	function (arg1, callback) {
		console.log('Third step --> ' + arg1);
		callback(null, 'Finish');
	}
];

async.waterfall(taskArray, function(err, result) {
	if (err) {
		console.log('Error : ' + err);
	} else {
		console.log('Result : ' + result);
	}
});
console.log('Program End!');


// console.log('Program Start!');

// let taskArray = [
// 	firstFunction,
// 	secondFunction,
// 	thirdFunction
// ];
// function firstFunction(callback) {
// 	console.log('First step --> ');
// 	callback(null, '1', '2');
// };
// function secondFunction(arg1, arg2, callback) {
// 	console.log('Second step --> ' + arg1 + ' ' + arg2);
// 	callback(null, '3');
// };
// function thirdFunction(arg1, callback) {
// 	console.log('Third step --> ' + arg1);
// 	callback(null, 'Finish');
// };
// async.waterfall(taskArray, function(err, result) {
// 	if (err) {
// 		console.log('Error : ' + err);
// 	} else {
// 		console.log('Result : ' + result);
// 	}
// });
// console.log('Program End!');