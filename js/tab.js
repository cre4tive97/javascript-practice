let tabs = document.querySelectorAll("p");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.add("hidden");
    }
    tabs[i].classList.remove("hidden");
  });
}
