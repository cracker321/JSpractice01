

// Object.keys(obj);
// Object.values(obj);
// Object.entries(obj); //[["key1", value1], ["key2", value2], ...


const user = {

    name: "cho",
    age: 32,
    address: null,
    phoneNumber: "01022444170",
};

const myInfo = Object.entries(user);
console.log(myInfo); //출력값: 위 'user 객체의 '키 값'과 '밸류 값' 모두' 추출됨.


//< Array 배열 >
const arr = [10, 20, 30, 40];

// #push(): 배열의 마지막에 새로운 요소를 추가하고, 변경된 배열의 길이를 반환함
arr.push(50);
console.log(arr);

// #pop(): 배열의 마지막 요소를 제거하고, 제거한 그 요소를 반환함
arr.pop();
console.log(arr);

// #reverse(): 배열 내부의 순서를 뒤바꾸고, 뒤바뀐 배열을 반환함.
arr.reverse();
console.log(arr);

// #shift(): 배열의 첫 번째 요소를 제거하고, 제거한 그 요소를 반환함
console.log(arr.shift());
console.log(arr);

// #filter(callback): 조건이 true인 원소로 이루어진 새로운 배열. 모두 false인 경우, '빈 배열'을 반환함


const users = [
    {
        name: "cho",
        age: 32,
    },
    {
        name: "choi",
        age: 33,
    },
    {
        name: "park",
        age: 40,
    }
];


console.log(users);

console.log(users.find((user) => user.age > 30));
console.log(users.findIndex((user)=>user.age>30)); //주어진 판별 함수를 만족하는 '첫 번째 원소의 인덱스(번호)'를 반환. 만족하는 원소가 없는 경우 '-1'을 반환
console.log(users.find((user)=>user.age>30));
