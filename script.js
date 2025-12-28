// ---------- MUSIC CONTINUOUS ----------
let music;

function loadMusic() {
  music = document.getElementById("bg-music");
  const t = sessionStorage.getItem("musicTime") || 0;
  music.currentTime = t;
  const playing = sessionStorage.getItem("musicPlaying");
  if (playing === "true") music.play();
  setInterval(()=>{
    if(music) sessionStorage.setItem("musicTime", music.currentTime);
  },800);
}

document.addEventListener("DOMContentLoaded", loadMusic);

function toggleMusic(){
  if(music.paused){
    music.play();
    sessionStorage.setItem("musicPlaying","true");
  } else {
    music.pause();
    sessionStorage.setItem("musicPlaying","false");
  }
}

// ---------- NAVIGATION ----------
function goToEnvelope(){ window.location="envelope.html"; }
function openLetter(){
  document.querySelector(".envelope").classList.add("open");
  setTimeout(()=> window.location="letter.html",1200);
}
function goToFinal(){ window.location="final.html"; }
function replaySite(){ window.location="index.html"; }

// ---------- HEART / FIREWORK PARTICLES ----------
const layer = document.getElementById("effect-layer");

function dropEmoji(e){
  const span = document.createElement("span");
  span.innerText = e;
  span.style.position="fixed";
  span.style.left = Math.random()*100+"vw";
  span.style.top = "-10vh";
  span.style.fontSize = (18+Math.random()*18)+"px";
  span.style.animation = "fall 6s linear forwards";
  layer.appendChild(span);
  setTimeout(()=>span.remove(),6000);
}

setInterval(()=>{
 ["❤️","💕","💖","💗","💓","✨","🎆"].forEach(()=>dropEmoji("❤️"));
},900);

// ---------- SEND LOVE : KISS RAIN ----------
function kissRain(){
  for(let i=0;i<40;i++){
    setTimeout(()=> dropEmoji("💋"), i*60);
  }
}
