const id = document.querySelector(".class-id");
const pw = document.querySelector(".class-pw");
const classBtn = document.querySelector(".class-submit");
const savedList = document.querySelector(".saved");

class Register {
  constructor(a, b) {
    this.id = a;
    this.pw = b;
  }
}

let result = [];
classBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let idValue = id.value;
  let pwValue = pw.value;
  let obj = new Register(idValue, pwValue);
  if (confirm(`ID : ${obj.id}, Password : ${obj.pw} 가 맞습니까?`) == true) {
    result.push(obj);
    result.forEach((a) => {
      savedList.innerHTML = `Id : ${a.id}, Password : ${a.pw}`;
    });
  } else {
    return;
  }
  return result;
});
