
//1.'변수 data'에 'user 객체'를 담을 것임
const data = user;

//2.'user 객체'를 표현
const data = {
    name: "yujong",
    age: 32,
    address: "seoul",
    favorite: "food",
    gender: "male",
    weight: 64,
};

//3.'변수 data'에 가져올 '속성의 키'만 작성
const {favorite, gender, weight} = {name: "yujong", age: 32, address: "seoul", favorite: "food", gender: "male", weight: 64};

//4. 우측 내용을 동일한 내용인 'user 객체'로 이름만 바꿔쓰기
//왼쪽은, 'user 객체의 모든 속성들 중 'favorite 속성', 'gender 속성', 'weight 속성'에 해당하는 '각 키값'들 뽑아온 것이 담겨있음.
const {favorite, gender, weight} = user;


//cf) 확산연산자 - 하나의 객체의 여러 속성들 중
//'...rest': 하나의 객체의 여러 속성 배열 중 일부 속성만 적고 그 뒤에 '...rest'를 적으면, 해당 객체(여기서는 user 객체)의 모든 속성들이 자동으로 다 입력해주는 것을 뜻함
//즉 아래 배열은 'user 객체의 모든 속성을 다 가지고 있는 온전한 배열'임.
const{ name, age, address, ...rest} = user;

//cf) 확산연산자
//'...listRest':
const list = [1, 2, 3, 4, 5, 6, 7];
// const [아 이거 헷갈림 머지..listRest] = list;


