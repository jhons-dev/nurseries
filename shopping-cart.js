const iconShopping = document.querySelector(".icon__shopping");
const shopping = document.querySelector(".shopping");
const backgroundShopping = document.querySelector(".shopping__background");

iconShopping.addEventListener("click", () => {
  shopping.classList.toggle("shopping--show");
  backgroundShopping.classList.toggle("shopping--show");
});

backgroundShopping.addEventListener("click", (e) => {
  if (
    shopping.classList.contains("shopping--show") &&
    e.target != shopping

  ) {
    shopping.classList.toggle("shopping--show");
    backgroundShopping.classList.toggle("shopping--show");
  }
});
