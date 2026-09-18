
const cupones = [
  {
    img: "2.1.png",
    texto: "Valido por una tarde juntos: “Incluye palabras bonitas, empujoncito emocional y ganas renovadas"
  },
  {
    img: "3.1.png",
    texto: "Valido por apoyo emocional: Mis curas son para ti. Para esos días donde todo pesa más."
  },
  {
    img: "4.png",
    texto: "Cupón especial: Cierra los ojitos porque puede gustarte tu sopresa especial"
  },
  {
    img: "5.png",
    texto: "Valido por compañia en silencio: Porque a veces solo se necesita compañia sin necesidad de hablar"
  },
  {
    img: "6.png",
    texto: "Valido para una tarde de pelis: Es intercanbiable por día de anime"
  }
];

const btnCupon = document.getElementById("btnCupon");
const imgCupon = document.getElementById("imgCupon");
const textoCupon = document.getElementById("textoCupon");

function cuponRandom() {
  const random = Math.floor(Math.random() * cupones.length);
  imgCupon.src = cupones[random].img;
  textoCupon.textContent = cupones[random].texto;
}
btnCupon.addEventListener("click", cuponRandom);
