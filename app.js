const API = "https://dog.ceo/api/breeds/image/random";
const perroActual = document.getElementById("perroActual");
const saltar = document.getElementById("saltar");
const spinner = document.getElementById("spinner");
const contenedorLikePerro = document.getElementById("contenedorLikePerro");
const contenedorDislikePerro = document.getElementById("contenedorDisLikePerro");

contenedorLikePerro.classList.add("escondido")
contenedorDislikePerro.classList.add("escondido")

spinner.classList.add("escondido");
saltar.addEventListener("click", nuevoPerro);

document.getElementById("like").addEventListener("click", () => rankingPerros("+"));

document.getElementById("dislike").addEventListener("click", () => rankingPerros("-"));

perroActual.addEventListener("load", () => {
  perroActual.classList.toggle("escondido", false);
  spinner.classList.toggle("escondido", true);
});

async function nuevoPerro() {
  spinner.classList.toggle("escondido", false);
  perroActual.classList.toggle("escondido", true);

  const res = await fetch(API);
  const data = await res.json();
  perroActual.src = data.message;
}

function rankingPerros(ranking) {
    const nuevaImg = document.createElement("img");
  nuevaImg.src = perroActual.src;
  if (ranking === "+") {
    contenedorLikePerro.appendChild(nuevaImg);
    contenedorLikePerro.classList.toggle("escondido", false)
  } else {
    contenedorDislikePerro.appendChild(nuevaImg);
    contenedorDislikePerro.classList.toggle("escondido", false)
  }

  nuevoPerro();
}

nuevoPerro();
