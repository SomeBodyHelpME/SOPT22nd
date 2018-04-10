console.log('** ==, === 비교 **');
console.log(5 == '5');                  // true
console.log(5 === '5');                 // false

console.log(5 != '5');                  // false
console.log(5 !== '5');                 // true

console.log('** undefined, null 비교 **');
var undefinedType;
var nullType = null;

console.log(undefinedType == nullType); // true
console.log(undefinedType === nullType);// false


console.log('** +, / 연산자 **')
var int1 = 3;
var int2 = 5;
var float1 = 0.3;
var float2 = 0.5;

console.log(int1 + int2);								// 8
console.log(float1 + float2);						// 0.8
console.log(int1 + float1);							// 3.3

console.log(int2 / int1);								// ?

console.log('** addition, concat 비교 **');
var str1 = 'Hello';
var str2 = "world";
console.log(str1 + str2);

console.log("문자열 + 숫자");
console.log("90" + 10);

console.log("숫자 + 문자열");
console.log(10 + "90");

console.log("문자열 + 숫자 + 문자열");
console.log("90" + 10 + "90");

console.log("문자열 + 숫자 + 숫자");
console.log("90" + 10 + 10);

console.log("숫자 + 문자열 + 문자열");
console.log(10 + "90" + "90");

console.log("숫자 + 숫자 + 문자열");
console.log(10 + 10 + "90");

console.log("숫자 + (숫자 + 문자열)");
console.log(10 + (10 + "90"));

console.log("문자열 + 문자열 + 숫자");
console.log("90" + "90" + 10);
