// 정수, 실수 둘 다 Number 타입. 64byte 실수형으로 표현
var integerType = 3;
var floatType = 0.3;

// '', "" 둘 다 String 타입
var singleQuoteStringType = '작은따옴표';
var doubleQuoteStringType = "큰따옴표";

// 한 글자의 character도 String
var oneCharacterType = 'a';

// true, false 모두 소문자
var trueBooleanType = true;
var falseBooleanType = false;

//선언만 하고 값을 넣지 않을 경우 -> undefined
var undefinedType;

// null 소문자
var nullType = null;


console.log(
  typeof integerType + '\n',            // number
  typeof floatType + '\n',              // number
  typeof singleQuoteStringType + '\n',  // string
  typeof doubleQuoteStringType + '\n',  // string
  typeof oneCharacterType + '\n',       // string
  typeof trueBooleanType + '\n',        // boolean
  typeof falseBooleanType + '\n',       // boolean
  typeof undefinedType + '\n',          // undefined
  typeof nullType + '\n',               // null
)
