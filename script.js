// ---------- CONTINUOUS MUSIC (MOBILE SAFE) ----------
let music;

function loadMusic() {
  music = document.getElementById("bg-music");

  const savedTime = Number(sessionStorage.getItem("musicTime")) || 0;
  const wasPlaying = sessionStorage.getItem("musicPlaying") === "true";

  // Wait until audio is ready BEFORE setting time
  music.addEventListener("loadedmetadata", () => {
    music.currentTime = Math.min(savedTime, music.duration || savedTime);
  });

  // Resume only if user had already enabled music
  music.addEventListener("canplay", () => {
    if (wasPlaying) {
      music.play().catch(()=>{ /* mobile safety */ });
    }
  });

  // Keep saving time while playing
  setInterval(() => {
    if (!music.paused) {
      sessionStorage.setItem("musicTime", music.currentTime);
    }
  }, 800);
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

// Save time when leaving page
window.addEventListener("pagehide", () => {
  if (music) sessionStorage.setItem("musicTime", music.currentTime);
});
