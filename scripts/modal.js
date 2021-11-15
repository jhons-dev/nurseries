const modalMain = document.querySelector(".modal");
let infoClose = null;

const modal1 = document.querySelector("#slide1");
const modal2 = document.querySelector("#slide2");
const modal3 = document.querySelector("#slide3");
const modal_info = document.querySelector(".modal__info");

modal1.addEventListener("click", () => {
  modal_info.innerHTML = "";
  modal_info.innerHTML += `
    
    <h2 class="info__title">¿Cómo cuidar las plantas de exterior?</h2>
            <img
              src="images/icons/close.svg"
              alt="icon-close"
              class="info__close"
            />
            <img
              src="images/leafgreen.png"
              alt="maceta-leafgreen"
              class="info__img"
            />
            <p class="info__paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia, labore? Doloribus rerum ut nesciunt dolores expedita
              architecto dolor voluptates. Laborum earum temporibus delectus,
              non iste consequatur odit debitis exercitationem necessitatibus
              fugiat accusamus dolor repudiandae voluptates aspernatur tempore
              corrupti nam nulla.
            </p>
    `;
  infoClose = document.querySelector(".info__close");

  infoClose.addEventListener("click", () => {
    modalMain.classList.remove("modal--show");
  });

  modalMain.classList.add("modal--show");
});

modal2.addEventListener("click", () => {
  modal_info.innerHTML = "";
  modal_info.innerHTML += `
      
      <h2 class="info__title">El clima y el cuidado de las plantas</h2>
              <img
                src="images/icons/close.svg"
                alt="icon-close"
                class="info__close"
              />
              <img
                class="info__img"
                src="images/weather.png"
                alt="maceta-leafgreen"
              />
              <p class="info__paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia, labore? Doloribus rerum ut nesciunt dolores expedita
                architecto dolor voluptates. Laborum earum temporibus delectus,
                non iste consequatur odit debitis exercitationem necessitatibus
                fugiat accusamus dolor repudiandae voluptates aspernatur tempore
                corrupti nam nulla.
              </p>
      `;

  infoClose = document.querySelector(".info__close");

  infoClose.addEventListener("click", () => {
    modalMain.classList.remove("modal--show");
  });

  modalMain.classList.add("modal--show");
});

modal3.addEventListener("click", () => {
  modal_info.innerHTML = "";
  modal_info.innerHTML += `
      
      <h2 class="info__title">¿Cuál es la mejor tierra para las plantas?</h2>
              <img
                src="images/icons/close.svg"
                alt="icon-close"
                class="info__close"
              />
              <img
              class="info__img"
              src="images/flowerpot.png"
              alt="maceta-leafgreen"
              />
              <p class="info__paragraph">
                3ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia, labore? Doloribus rerum ut nesciunt dolores expedita
                architecto dolor voluptates. Laborum earum temporibus delectus,
                non iste consequatur odit debitis exercitationem necessitatibus
                fugiat accusamus dolor repudiandae voluptates aspernatur tempore
                corrupti nam nulla.
              </p>
      `;

    infoClose = document.querySelector(".info__close");

    infoClose.addEventListener("click", () => {
      modalMain.classList.remove("modal--show")
    })
    
    modalMain.classList.add("modal--show");
});
