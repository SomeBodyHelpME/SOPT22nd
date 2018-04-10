// function의 선언 방식
function func1(n) {
  console.log('func1 : ' + n);
}
var func2 = function(n) {
  console.log('func2 : ' + n);
}

func1(1);
func2(2);
//
console.log(typeof func2);      // function

console.log('** JSON 프로퍼티 표현 방법 **');
var JSONObject = {
  "name" : "이상은",
  "part" : "server"
}
console.log(JSONObject);

var JSONObject2 = {
  name : "이상은",
  part : "server"
};
console.log(JSONObject2);

var JSONObject3 = {};
JSONObject3.name = "이상은";
JSONObject3["part"] = "server";
console.log(JSONObject3);
//
console.log("JSON Type : " + typeof JSONObject);   // object

// JSON 프로퍼티 접근 방법
console.log(JSONObject.part);						// server
console.log(JSONObject["part"]);				// server
//console.log(JSONObject[name]);


console.log('** String, Object 비교 **');
var str = 'Server';
var str2 = new String('Server');

console.log(str == str2);                // true
console.log(str === str2);               // false

console.log(typeof str);                 // string
console.log(typeof str2);                // object
