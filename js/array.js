let arr = [1, 2, 3, 4];
arr.pop(); // 어레이의 마지막값을 리턴하고, 마지막값을 뺀 어레이가 arr에 할당됨
console.log(arr); //[1,2,3]

// let data = [
//   { city: "서울", food: "갈비탕", since: 2010 },
//   { city: "부산", food: "돼지국밥", since: 2000 },
//   { city: "오사카", food: "쿠시카츠", since: 1990 },
// ];

let btn = document.querySelector(".array-btn");
let since = document.querySelector(".array-since");
let city = document.querySelector(".array-city");
let food = document.querySelector(".array-food");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let data = [];
  data.push(since.value);
  console.log(data);
});
