const burguer = document.querySelector(".icon__burguer");
const menu = document.querySelector(".header__menu");
const menuOption = document.querySelector(".menu__options");
const option = document.querySelector(".option")

burguer.addEventListener("click", () => {
  menu.classList.add("header__menu--show");
});


menu.addEventListener("click", (e) => {
  if (e.target !== menuOption) {
    menu.classList.remove("header__menu--show");
  }
});

