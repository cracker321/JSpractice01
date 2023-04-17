let x = 10;
let result; //'let'은 선언할 때, 꼭 할당을 해줄 필요는 없음


result = x++; //원래의 x값(10)을 할당한 후, x=x+1 계산
result = ++x; //x=x+1 계산 후, 계산된 x값을 할당

console.log(result);
console.log(result, ++x);
console.log(result, x++);

const a = '안녕';
'${a}하세요'; //출력값: "안녕하세요";


//< 삼항 조건 연산자 >
const price = 1000;

//삼항연산자 안 사용하는 경우
let isCheap;

if(price<5000){
    isCheap = true;
}else{
    isCheap = false;
}

//삼항연산자 사용하는 경우
let isCheap = price < 5000 ? true : false;


