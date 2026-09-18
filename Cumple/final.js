const PASSWORD = "Always"; 
const MUSIC_VOLUME = 0.35;
const acts = document.querySelectorAll(".act");
const music = document.getElementById("bg-music");
const errorMsg = document.getElementById("error-msg");
let currentAct = 1;
let musicStarted = false;

function goToAct(num) {
  console.log("Intentando ir al acto:", num); 
  const next = document.getElementById(`act${num}`);
  
  if (!next) {
    console.error("No se encontró el elemento act" + num);
    return;
  }
  acts.forEach(act => {
    act.classList.remove("active");
    act.style.display = "none"; 
  });
  next.classList.add("active");
  next.style.display = "flex";
  currentAct = num;
  try {
    if (!musicStarted) startMusic();
    if (num === 2) {
      createEmbers();
      startTyping();
    }
    if (num === 5) fadeMusic();
  } catch (err) {
    console.warn("Error en efectos visuales, pero la navegación sigue:", err);
  }
}
function startMusic() {
  if (!music) return;
  
  music.volume = MUSIC_VOLUME;
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      
      console.log("Música no encontrada o bloqueada por el navegador aún.");
    });
  }
  musicStarted = true;
}
function fadeMusic() {
  if (!music || music.readyState < 2) return; 
  
  let v = music.volume;
  const fade = setInterval(() => {
    v -= 0.02;
    if (v <= 0) {
      music.volume = 0;
      clearInterval(fade);
    } else {
      music.volume = v;
    }
  }, 200);
}
function startTyping() {
  const el = document.querySelector(".type-text");
  if (!el || el.dataset.done) return;

  const text = el.innerHTML.trim().split("<br>"); 
  el.innerHTML = "";
  el.dataset.done = "true";

  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < text.length) {
      if (charIndex < text[lineIndex].length) {
        el.innerHTML += text[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 35);
      } else {
        el.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 500);
      }
    }
  }
  type();
}
function checkPassword() {
  const input = document.getElementById("secret");
  const PASSWORD = "Always"; 

  if (input.value.trim().toLowerCase() === PASSWORD.toLowerCase()) {
    window.location.href = "final.html";
  } else {
    const errorMsg = document.getElementById("error-msg");
    errorMsg.textContent = "Jamas crei que diria esto pero nunca crei que mi boggart cambiara, antes era la soledad, ahora es perderte :c";
    input.value = "";
  }
}
function createEmbers() {
  for (let i = 0; i < 30; i++) {
    const ember = document.createElement("div");
    ember.className = "ember";
    ember.style.left = Math.random() * 100 + "vw";
    ember.style.top = "100vh";
    ember.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(ember);
    
    setTimeout(() => {
      ember.remove();
    }, 4000);
  }
}