const GameManager = (() => {
let players = [];
let currentPlayerIndex = 0;
let gameType = "x01";
let round = 1;
let dartsThrown = 0;
let maxDartsPerTurn = 3;

function init() {
UIManager.updateMessage("Select a game and setup players.");
}

function selectGame() {
gameType = document.getElementById("gameModeSelect").value;
UIManager.updateMessage(`Selected ${gameType.toUpperCase()} mode`);
}

function setupPlayers() {
const names = document.getElementById("playerNames").value.split(",").map(n => n.trim());
const types = document.getElementById("playerTypes").value.split(",").map(t => t.trim().toUpperCase());
players = names.map((name, i) => ({
name: name || `Player ${i+1}`,
type: types[i] || "H",
score: gameType === "x01" ? parseInt(document.getElementById("x01Start").value) : 0,
stats: { dartsThrown:0, totalScore:0, MPR:0 }
}));
currentPlayerIndex = 0;
UIManager.renderPlayers(players);
UIManager.updateMessage(`Players setup complete.`);
}

function manualThrow() {
const dart = document.getElementById("manualDart").value.toUpperCase().trim();
if(!dart) return;
scoreDart(dart);
}

function scoreDart(dart) {
let points = ScoreManager.calculateScore(dart, gameType);
players[currentPlayerIndex].score -= points;
players[currentPlayerIndex].stats.totalScore += points;
players[currentPlayerIndex].stats.dartsThrown++;
UIManager.animateDart(dart);
SoundManager.playHitSound(dart);
UIManager.updateScore(players);
dartsThrown++;
StatsManager.updateMPR(players[currentPlayerIndex]);
if(dartsThrown >= maxDartsPerTurn) nextPlayer();
}

function nextPlayer() {
dartsThrown = 0;
currentPlayerIndex = (currentPlayerIndex +1)%players.length;
UIManager.updateMessage(`Next player: ${players[currentPlayerIndex].name}`);
if(players[currentPlayerIndex].type === "N") NPCManager.botThrow(players[currentPlayerIndex]);
}

function bankScore() {
UIManager.updateMessage(`${players[currentPlayerIndex].name} banked their score.`);
nextPlayer();
}

return {
init,
selectGame,
setupPlayers,
manualThrow,
nextPlayer,
bankScore
};
})();
