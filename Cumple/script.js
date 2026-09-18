for (let i = 0; i < 45; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDelay = Math.random() * 7 + 's';
  document.body.appendChild(p);
}

const sobre = document.getElementById('sobre');
const carta = document.getElementById('carta');
const audio = document.getElementById('audio');

sobre.addEventListener('click', () => {
  sobre.style.display = 'none';
  carta.style.display = 'block';
  audio.play();
});

function reiniciar() {
  carta.style.display = 'none';
  sobre.style.display = 'flex';
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('mensajeSecreto').style.display = 'none';
}

function mostrarSecreto() {
  const mensaje = document.getElementById('mensajeSecreto');

  if (mensaje.style.display === 'inline' || mensaje.style.display === 'block') {
    mensaje.style.display = 'none';
  } else {
    mensaje.style.display = 'inline';
  }
}

function playSoundAndGo() {
  const sonido = document.getElementById("clickSound");
  sonido.currentTime = 0;
  sonido.play();

  setTimeout(() => {
    window.location.href = "jojos.html";
  }, 3000);
}
