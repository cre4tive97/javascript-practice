// map() 메소드

// function
어레이.map(function (value, index, array) {
  콜백함수;
});

// ES6+ Arrow function
어레이.map((value, index, array) => {
  콜백함수;
});

let arr = [1, 2, 3, 4, 5];
let arrMap = numbers.map(function (a) {
  return a * 2;
});
console.log(arrMap); // [2,4,6,8,10]

//Arrow function
let arr = [1, 2, 3, 4, 5];
let arrMap = arr.map((a) => a * 2);

console.log(arrMap); // [2,4,6,8,10)

let 숫자 = [1, 2, 3, 4, 5, 6, 7];
let 홀짝 = 숫자.map((a) => {
  if (a % 2 == 0) {
    return (a = "짝수");
  } else {
    return (a = "홀수");
  }
});
console.log(홀짝); // ['홀수','짝수','홀수','짝수','홀수','짝수','홀수']

// filter() 메소드
let arr = [1, 2, 3, 4, 5];
let arrFilter = arr.filter((a) => a < 3);
console.log(arrFilter); // [1,2]

let students = [
  { name: "Kim", age: 15 },
  { name: "Park", age: 12 },
  { name: "Choi", age: 9 },
];
let studentsFilter = students.filter((a) => {
  return a.name.length > 3 && a.age > 10;
});
console.log(studentsFilter); // [{name : "Park", age : 12}]

// reduce() 메소드
arr.reduce((accumulator, currentValue, currentIndex, array) => {
  콜백함수;
}, 초기값);

let numbers = [1, 2, 3, 4, 5];
let numbersReduce = numbers.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
});

console.log(numbersReduce);
// 1, 2
// 3, 3
// 6, 4
// 10, 5
// 15

let numbers = [1, 2, 3, 4, 5];
let numbersReduce = numbers.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
}, 10);

console.log(numbersReduce);
// 10, 1
// 11, 2
// 13, 3
// 16, 4
// 20, 5
// 25

// reduce() 메소드로 map() 메소드 구현하기
let numbers = [1, 2, 3, 4, 5];
let numbersMap = numbers.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);

console.log(numbersMap); // [2,4,6,8,10]

// reduce() 메소드로 filter() 메소드 구현하기
let numbers = [1, 2, 3, 4, 5];
let numbersFilter = numbers.reduce((acc, cur) => {
  if (cur < 3) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(numbersFilter); // [1,2]
