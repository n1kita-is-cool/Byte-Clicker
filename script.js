clickBtn.addEventListener("click", () => {
  glitches += multiplier;
  clickSound.currentTime = 0;
  clickSound.play();
  updateUI();
  saveGame();

  // Animate the click
  clickBtn.classList.add("clicked");
  setTimeout(() => {
    clickBtn.classList.remove("clicked");
  }, 100); // 0.1 seconds
});

let glitches = parseInt(localStorage.getItem("glitches")) || 0;
let multiplier = parseInt(localStorage.getItem("multiplier")) || 1;
let autoClickers = parseInt(localStorage.getItem("autoClickers")) || 0;

const glitchCountEl = document.getElementById("glitchCount");
const clickBtn = document.getElementById("clickBtn");
const autoClickerBtn = document.getElementById("autoClickerBtn");
const multiplierBtn = document.getElementById("multiplierBtn");
const clickSound = document.getElementById("clickSound");

// Save game state
function saveGame() {
  localStorage.setItem("glitches", glitches);
  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("autoClickers", autoClickers);
}

clickBtn.addEventListener("click", () => {
  glitches += multiplier;
  clickSound.currentTime = 0;
  clickSound.play();
  updateUI();
  saveGame();
});

autoClickerBtn.addEventListener("click", () => {
  if (glitches >= 10) {
    glitches -= 10;
    autoClickers += 1;
    updateUI();
    saveGame();
  }
});

multiplierBtn.addEventListener("click", () => {
  if (glitches >= 25) {
    glitches -= 25;
    multiplier += 1;
    updateUI();
    saveGame();
  }
});

function updateUI() {
  glitchCountEl.textContent = glitches;
}

setInterval(() => {
  glitches += autoClickers;
  updateUI();
  saveGame();
}, 1000);
