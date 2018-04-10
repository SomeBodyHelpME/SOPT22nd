// 변수 호이스팅
var scope = 'global';

function f() {
  console.log(scope);                 // undefined
  var scope = 'local';
  console.log(scope);                 // local
}
f();
console.log(scope);                   // global

// function f() {
//   var scope;
//   console.log(scope);
//   scope = 'local';
//   console.log(scope);
// }
// f();



console.log('** 함수 선언 vs 변수 선언 **');
var test;

function test() {
	console.log('test');
}

console.log(typeof test);		// function

var test = 'test';

function test() {
	console.log('test');
}

console.log(typeof test);		// string



console.log('** 함수 선언식 vs 함수 표현식 **');

func(5);															// 25

function func(x) {
	console.log(x * x);
}

//func2(6);														// Error

var func2 = function (y) {
	console.log(y * y);
}