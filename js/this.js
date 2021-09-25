// 1. 함수, 전역에서 사용할 때
console.log(this); // Window{}

function 디스() {
  console.log(this);
}

디스(); // Window{}

// 2. Object(객체) 내부에 있는 함수(메소드) 안에서 사용할 때

let 오브젝트 = {
  name: "Choi",
  age: 24,
  greeting: function () {
    console.log(
      "안녕 나는 " + this.name + "이고 나이는" + this.age + "살이야."
    );
  },
};
오브젝트.greeting(); // 안녕 나는 Choi 이고 나이는 24살이야.

let test1 = {
  name: "Choi",
  test2: {
    test3: {
      test5: function () {
        console.log(this); // ??
      },
      test6: {
        test7: {},
        test8: function () {
          console.log(this); // ??
        },
      },
    },
  },
  test4: {
    test9: function () {
      console.log(this); // ??
    },
  },
};
test1.test2.test3.test5(); // test1.test2.test3
test1.test2.test3.test6.test8(); // test1.test2.test3.test6
test1.test4.test9(); // test1.test4

// 3. constructor(생성자) 안에서 사용할 때

function 학생() {
  this.name = "철수";
  this.age = 12;
}

let 학생1 = new 학생();
console.log(학생1); // this 는 학생1(새로 생겨나는 오브젝트)

// 4. EventListener 안에서 사용할 때

document.getElementById("button").addEventListener("click", function () {
  console.log(this);
}); // event.currentTarget

document.getElementById("button").addEventListener("click", function () {
  let arr = [1, 2, 3];
  arr.forEach(function () {
    console.log(this);
  });
}); // window * 3

document.getElementById("button").addEventListener("click", function (event) {
  let arr = [1, 2, 3];
  arr.forEach(() => {
    console.log(this);
  });
}); // event.currentTarget * 3
