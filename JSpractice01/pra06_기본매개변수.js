const func1 = (name, age) => {
    return "이름: ${name} / 나이: ${age}";
};

const func2 = (name, age = 12) => {
    return '이름: ${name} / 나이: ${age}';
};


console.log(func1("철수"));
console.log(func2("철수"));
