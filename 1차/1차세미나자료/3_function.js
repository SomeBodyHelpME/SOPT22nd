console.log('*** 변수나 데이터 구조안에 담을 수 있다. ***');
var func1 = function() {
	console.log(1);
}
func1();		// 1

console.log('*** 파라미터로 전달할 수 있다. ***');
var func2_1 = function() {
	return 2;
}
var func2_2 = function(value) {
	console.log(value);
}
func2_2(func2_1());		// 2

console.log('*** 반환값(return value)으로 사용할 수 있다. ***');
var func3 = function() {
	return function() {
		console.log(3);
	}
}
func3()();		// 3

console.log('*** 할당에 사용된 이름과 관계없이 고유한 구별이 가능하다. ***');
var func4 = function func44() {
	console.log(4);
}
func4();		// 4

console.log('*** 동적으로 프로퍼티 할당이 가능하다. ***');
var func5 = function() {
	console.log(5);
}
func5.property = '55';
console.log(func5.property);		// 5

