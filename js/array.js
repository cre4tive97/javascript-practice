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

let data = [];
btn.addEventListener("click", function (e) {
  e.preventDefault();
  data.push({ since: since.value, city: city.value, food: food.value });
  let p = document.createElement("p");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    p.innerHTML = `이 가게는 ${data[i].since}년부터 ${data[i].city}에서 ${data[i].food}를 팔고 있어요.`;
  }
  document.body.append(p);
});

// 원본데이터의 보존가능성을 위해서는 map, filter 같은 함수를 사용해 새로운 어레이를 리턴한다.
