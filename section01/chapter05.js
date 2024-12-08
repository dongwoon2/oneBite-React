// 1. Number Type

let num1 = 237;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);

let inf = Infinity;
let minf = -Infinity;

let nan = NaN;

// 2. String Type
let myName = "DongWoon";
let myLocation = "강서";
let introduce = myName + myLocation;

console.log(introduce);

/* 동적으로 문자열에 포함시킬 수 있다. 
   템플릿 리터럴 문법템플릿 리터럴 문법
   백틱 : ` (숫자 1번 옆)
*/
let introduceText = `${myName}은 ${myLocation}에 거주`;
console.log(introduceText);

