const carouselSlide = document.querySelector(".carousel__slide");
const modal = document.querySelector(".modal");
const infoClose = document.querySelector(".info__close");
const images = document.querySelector(".image__product")



carouselSlide.addEventListener("click", () => {
    modal.classList.add("modal--show");
});

infoClose.addEventListener("click", () => {
    modal.classList.remove("modal--show");
});
  