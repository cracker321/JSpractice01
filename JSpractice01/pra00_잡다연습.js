const users = [
    {
        name: "cho",
        age: 12,
    },
    {
      name: "kim",
      age: 44,
    },
    {
      name: "park",
      age: 24,
    },
];


//'users 객체배열의 3개 객체들 중'에서 'name 속성(key)의 값(value)이 "park"인 'user 객체(의 전체 속성)'를 반환'하라.
const certainUser = users.find((user) => user.name==="park");
// const certainUser = users.find(function(user){
//     return user.name == "park";
// });


console.log(certainUser); //출력값: 해당하는 객체의 모든 key와 value값.
