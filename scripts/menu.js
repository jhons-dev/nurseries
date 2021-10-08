const burguer = document.querySelector(".icon__burguer");
const menu = document.querySelector(".header__menu");
const menuOption = document.querySelector(".menu__options");

const shopping = document.querySelector(".shopping");
const backgroundShopping = document.querySelector(".shopping__background");

burguer.addEventListener("click", (e) => {
  if (
    shopping.classList.contains("shopping--show") &&
    e.target != shopping

  ) {
    shopping.classList.remove("shopping--show");
    backgroundShopping.classList.remove("shopping--show");
  }
  menu.classList.add("header__menu--show");
});


menu.addEventListener("click", (e) => {
  if (e.target !== menuOption) {
    menu.classList.remove("header__menu--show");
  }
});

