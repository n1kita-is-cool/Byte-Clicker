
let glitches = 0;
let multiplier = 1;
let autoClickers = 0;

const glitchCountEl = document.getElementById("glitchCount");
const clickBtn = document.getElementById("clickBtn");
const autoClickerBtn = document.getElementById("autoClickerBtn");
const multiplierBtn = document.getElementById("multiplierBtn");

clickBtn.addEventListener("click", () => {
  glitches += multiplier;
  updateUI();
});

autoClickerBtn.addEventListener("click", () => {
  if (glitches >= 10) {
    glitches -= 10;
    autoClickers += 1;
    updateUI();
  }
});

multiplierBtn.addEventListener("click", () => {
  if (glitches >= 25) {
    glitches -= 25;
    multiplier += 1;
    updateUI();
  }
});

function updateUI() {
  glitchCountEl.textContent = glitches;
}

setInterval(() => {
  glitches += autoClickers;
  updateUI();
}, 1000);
