
var var1 = 'var1';
var var2 = 'var2';
var var1 = 'var3';							// 재선언 가능
function a() {
  var var1 = "var1_2";
  var2 = 'var2_2';							// 전역 변수
  console.log(var1);						// 지역 변수				
}
a();														// var1_2
console.log(var1);							// var3
console.log(var2);							// var2_2

let let1 = "let1";
function b() {
  let let1 = "let1_2";
  let let2 = "let2";
	// let let2 = "let3";						// 재선언 불가(Syntax Error)
  console.log(let1+' / '+let2);
}
b();														// let1_2 / let2
console.log(let1);							// let1
// console.log(let2);							// Reference Error


const constvalue = 10;
console.log(constvalue);

// const constvalue = 20;					// Syntax Error
// console.log(constvalue);

// constvalue = 20;								// 재할당 불가(Type Error)
// console.log(constvalue);

// const constvalue2;							// Syntax Error


