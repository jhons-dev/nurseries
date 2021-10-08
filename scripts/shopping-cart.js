const iconShopping = document.querySelector(".icon__shopping");
const shopping2 = document.querySelector(".shopping");
const backgroundShopping2 = document.querySelector(".shopping__background");

iconShopping.addEventListener("click", () => {
  shopping2.classList.toggle("shopping--show");
  backgroundShopping2.classList.toggle("shopping--show");
});

backgroundShopping2.addEventListener("click", (e) => {
  if (
    shopping2.classList.contains("shopping--show") &&
    e.target != shopping2

  ) {
    shopping2.classList.toggle("shopping--show");
    backgroundShopping2.classList.toggle("shopping--show");
  }
});
