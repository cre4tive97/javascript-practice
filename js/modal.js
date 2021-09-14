const card = document.querySelector(".main-card");
const modal = document.querySelector(".modal");
const modalYes = document.querySelector(".modal__yes");
const modalNo = document.querySelector(".modal__no");

const HIDDEN_CLASSNAME = "hidden";

card.addEventListener("click", function () {
  modal.classList.remove(HIDDEN_CLASSNAME);
});

modalYes.addEventListener("click", () => {
  let span = document.createElement("span");
  span.innerText = "구매완료";
  card.append(span);
  modal.classList.add(HIDDEN_CLASSNAME);
});

modalNo.addEventListener("click", () => {
  modal.classList.add(HIDDEN_CLASSNAME);
});
