let currentLevel = 1;
let maxLevel = 3;
let pattern = [];
let playerPattern = [];
let gridSize = 5;

const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const winScreen = document.getElementById("win-screen");
const levelText = document.getElementById("level-text");
const gridContainer = document.getElementById("grid-container");
const feedback = document.getElementById("feedback");
const startBtn = document.getElementById("start-btn");
const restartGameBtn = document.getElementById("restart-game-btn");
const startGameBtn = document.getElementById("start-game-btn");

function startLevel(level) {
  currentLevel = level;
  gridSize = 5 + (level - 1) * 2;
  pattern = [];
  playerPattern = [];
  levelText.textContent = `Level: ${currentLevel}`;
  feedback.textContent = "";
  generateGrid(gridSize);
  startBtn.classList.add("hidden");
  generatePattern();
  flashPattern();
}

function generateGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
      const tile = document.createElement("div");
      tile.classList.add("grid-tile");
      tile.dataset.index = i;
      tile.addEventListener("click", () => handleTileClick(i));
      gridContainer.appendChild(tile);
    }
  }  

function generatePattern() {
  const totalTiles = gridSize * gridSize;
  for (let i = 0; i < currentLevel + 2; i++) {
    pattern.push(Math.floor(Math.random() * totalTiles));
  }
}

function flashPattern() {
  let index = 0;
  const tiles = document.querySelectorAll(".grid-tile");

  const interval = setInterval(() => {
    if (index > 0) tiles[pattern[index - 1]].classList.remove("active");
    if (index < pattern.length) {
      tiles[pattern[index]].classList.add("active");
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        tiles.forEach(tile => tile.classList.remove("active"));
      }, 500);
    }
  }, 800);
}

function handleTileClick(tileIndex) {
  if (playerPattern.length >= pattern.length) return;

  const tile = document.querySelector(`[data-index="${tileIndex}"]`);
  playerPattern.push(tileIndex);
  tile.classList.add("active");
  setTimeout(() => tile.classList.remove("active"), 300);

  if (!checkPattern()) {
    feedback.textContent = "Incorrect! Restarting from Level 1...";
    feedback.style.color = "red";
    setTimeout(() => startLevel(1), 1500);
  } else if (playerPattern.length === pattern.length) {
    if (currentLevel < maxLevel) {
      feedback.textContent = "Correct! Prepare for the next level.";
      feedback.style.color = "lime";
      startBtn.textContent = "Next Level";
      startBtn.classList.remove("hidden");
    } else {
      showWinScreen();
    }
  }
}

function checkPattern() {
  for (let i = 0; i < playerPattern.length; i++) {
    if (playerPattern[i] !== pattern[i]) return false;
  }
  return true;
}

function showWinScreen() {
  gameContainer.classList.add("hidden");
  winScreen.classList.remove("hidden");
}

function restartGame() {
  winScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  gameContainer.classList.add("hidden");
  currentLevel = 1;
  pattern = [];
  playerPattern = [];
}

startGameBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  startLevel(1);
});

restartGameBtn.addEventListener("click", restartGame);
startBtn.addEventListener("click", () => startLevel(currentLevel + 1));