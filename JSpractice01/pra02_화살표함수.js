//[ 화살표 함수 ]
//https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC
/*

1.< 공통 규칙 >
- function 생략 : 'function'은 어느 경우에나 다 생략해줄 수 있음
- 화살표 기호 삽입: '화살표 함수'이기에 당연히 화살표 기호('=>')를 넣어주는 것은 디폴트임


2.< 매개변수 규칙 >
- ()=> : 매개변수가 없을 경우
- x=> : 매개변수가 1개인 경우, 소괄호를 생략할 수 있다
- (x, y)=> : 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다


3.< 함수 구현부(실행문 영역) 규칙 >
- 함수 구현부가 한 줄의 구문이라면, '중괄호{}'와 'return'을 모두 생략할 수 있다
원래 부분: x=> { return x*x } 인 경우,
바뀐 부분: x=> x*x 로 바꿀 수 있다.

원래 부분: ()=> { return { a:1 }; } 인 경우,
바뀐 부분: ()=> ({ a:1 })


 */


//=====================================================================================================================

//[ 최초 원래의 (익명)함수 1 - 매개변수 없음 ]
let hi = function(){

  return alert("안녕하세용")
}

//=====================================================================================================================

//2.< 매개변수 규칙 >
//- ()=> : 매개변수가 없을 경우
let hi = () => {

    return alert("안녕하세용")
}

//=====================================================================================================================

// 3.< 함수 구현부(실행문 영역) 규칙 >
// - 함수 구현부가 한 줄의 구문이라면, '중괄호{}'와 'return'을 모두 생략할 수 있다

let hi = () => alert("안녕하세용");

//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================

//[ 최초 원래의 (익명)함수 2 - 매개변수 1개 ]
let hi = function(user){

    return alert(user+"님 안녕하세용")
}

//=====================================================================================================================

// 2.< 매개변수 규칙 >
//- x=> : 매개변수가 1개인 경우, 소괄호를 생략할 수 있다
let hi = user => {

    return alert(user+"님 안녕하세용")
}

//=====================================================================================================================

// 3.< 함수 구현부(실행문 영역) 규칙 >
// - 함수 구현부가 한 줄의 구문이라면, '중괄호{}'와 'return'을 모두 생략할 수 있다

let hi = user => alert(user+"님 안녕하세용")

//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================

//[ 최초 원래의 (익명)함수 3 - 매개변수 2개 이상인 경우 ]
let hi = function(userA, userB){

    return alert(userA+"님"+userB+"님 안녕하세용");
}

//=====================================================================================================================

// 2.< 매개변수 규칙 >
// - (x, y)=> : 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다

let hi = (userA, userB) => {

    return alert(userA+"님"+userB+"님 안녕하세용");
}

//=====================================================================================================================

// 3.< 함수 구현부(실행문 영역) 규칙 >
// - 함수 구현부가 한 줄의 구문이라면, '중괄호{}'와 'return'을 모두 생략할 수 있다

let hi = (userA, userB) => alert(userA+"님"+userB+"님 안녕하세용");



//============================================================================================================================
//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================
let sum1 = function(a, b){
    return a+b;
};

//=====================================================================================================================

//'함수 sum1'과 '함수 sum2'는 동일한 함수이다!
let sum2 = (a,b) => a+b;

//=====================================================================================================================

