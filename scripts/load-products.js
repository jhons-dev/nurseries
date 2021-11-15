const url = "../data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let offers = document.querySelector(".products-offers");
    let products = document.querySelector(".products__items");

    offers.innerHTML = "";
    products.innerHTML = "";

    data.offers.forEach((item) => {
      offers.innerHTML += `
      <div class="offers__card swiper-slide">
      <div class="card__images">
      <img
        class="image__product"
        src="${item.image_product}"
        alt="suculenta"
      />
      <img
        src="${item.image_bushiness}"
        alt="logo-alcaplant"
        class="image__bushiness"
      />
      <div class="desc">
        <p>${item.desc}</p>
      </div>
      </div>
      <p class="offers__product">${item.product_name}</p>
      <p class="offers__price">${item.price_product}</p>
      <div class="offers__icons">
      <img
      src="images/icons/heart.svg"
      alt="icon-home"
      class="icon-heart__offers"
      />
      <img
      src="images/icons/shopping_cart.svg"
      alt="icon-shopping-cart"
      class="icon-shopping__offers"
      />
      </div>
      </div>
      `;
    });

    data.products.forEach((item2) => {
      products.innerHTML += `
      <div class="offers__card swiper-slide">
      <div class="card__images">
      <img
        class="image__product"
        src="${item2.image_product}"
        alt="suculenta"
      />
      <img
        src="${item2.image_bushiness}"
        alt="logo-alcaplant"
        class="image__bushiness"
      />
      </div>
      <p class="offers__product">${item2.product_name}</p>
      <p class="offers__price">${item2.price_product}</p>
      <div class="offers__icons">
      <img
      src="images/icons/heart.svg"
      alt="icon-home"
      class="icon-heart__offers"
      />
      <img
      src="images/icons/shopping_cart.svg"
      alt="icon-shopping-cart"
      class="icon-shopping__offers"
      />
      </div>
      </div>
      `;
    });
  })
  .catch((err) => console.error(err));
