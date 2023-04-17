function addNumber(a, b){
    return a+b;
}
// var sum = function(a, b){
//     return a+b;
// }
// const hi = function(){
//     return "안녕하세요?";
// }
// const hi = () => "안녕하세요?";

// let: 재할당O, 재선언X
// < const >
//- 재할당X, 재선언X. 값을 변경할 수 없다.
//- const 이후에 그 값을 변경할 수 없음


//[ 함수 ]
let hi = (a, b) => a+b;

//[ 객체 ]
var now = new Date();
console.log(now);


//[ 배열 ] 
//- 모든 데이터타입을 담아둘 수 있음
var numbers=["one", "two", "three"];
console.log(numbers);

var numbers=Array("1", "2", "3");
console.log(numbers);
var numbers = new Array(5);

const arr = [1, 'string', false, null, undefined];
const ages = [12, 23, 21, 25, 32];

const minsu = {
    name: '민수',
    age: 23,
}

const yeonghee = {
    name: '영희',
    age: 24,
}
const users = [minsu, yeonghee];

console.log(arr[0]);




//객체
/*
key(string 또는 number 또는 symbol): value(모든 자료형)의 쌍으로 구성된 속성
 */


const user = {

    name: "나란 남자",
    age: 12,
    isMale: true,
    "is happy": false,
    "familyName.":"이",
    0:1,
};

const post = {

    title: "제목",
    content: "내용",
    user,
}

console.log(user);
console.log(post);
ages[5]=100;

ages[6]=100;
console.log(ages);

/*
function 함수이름(매개변수1, 매개변수2, ..){
    함수가 호출되었을 때 실행하고자 하는 실행문들;

    return 반환값;
 */

/*
< 익명함수 >
function(a, b){
    return a+b;

'익명함수'를 '변수'에 할당할 수 있음.
또한, 다른 함수의 매개변수로 사용할 수도 있음.

const priceGetter = function(a, b){
    return (a+b)*3;

priceGetter(1000, 2000)
 */

//< 즉시실행함수 >
(function(){
    console.log("hi");
})();

//< 화살표함수 Arrow Function >
//- const 함수명 = (인자1, 인자2, ...) => { 실행문 }

// # 매개변수가 1개인 함수
function func1(a){
    return a+3;
}

// # 매개변수가 1개인 + 화살표함수
const func2 = (a) => {
    console.log("hi");
    return a+3;
}

// # 매개변수가 1개인 + 화살표함수 + 중괄호 생략(실행문이 하나인 경우에만)
const func3 = (a) => a+3;

// # 매개변수가 1개인 경우 + 화살표함수 + 중괄호 생략(실행문이 1개인 경우에만) + 소괄호 생략(인자값이 1개인 경우에만)
const func4 = a => a+3;

// # 매개변수가 1개인 경우 + 화살표함수 + 중괄호 생략 + 소괄호 생략 + retun문 생략(1개의 실행문을 return 하는 경우에만)
const func5 = () => console.log('hi');


//
const b = 2;
function test(){

    const a=1;
}

console.log(a);







