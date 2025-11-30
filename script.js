document.addEventListener("DOMContentLoaded", () => {
GameManager.init();
setupEventListeners();
});

function setupEventListeners() {
document.getElementById("startGameBtn").addEventListener("click", () => GameManager.selectGame());
document.getElementById("setupPlayersBtn").addEventListener("click", () => GameManager.setupPlayers());
document.getElementById("throwDartBtn").addEventListener("click", () => GameManager.manualThrow());
document.getElementById("cameraDartBtn").addEventListener("click", () => CameraInput.captureThrow());
document.getElementById("bankBtn").addEventListener("click", () => GameManager.bankScore());
document.getElementById("nextPlayerBtn").addEventListener("click", () => GameManager.nextPlayer());
}
