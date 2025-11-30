const UIManager = (() => {
function updateMessage(msg) { document.querySelector(".subtitle").innerText = msg; }
function renderPlayers(players) {
const panel = document.getElementById("playersPanel");
panel.innerHTML = players.map(p=>`<div>${p.name}: ${p.score}</div>`).join("");
}
function updateScore(players) { renderPlayers(players); }
function renderStats(player) {
document.getElementById("statsPanel").innerHTML = `<div>${player.name} MPR: ${player.stats.MPR}</div>`;
}
function animateDart(dart) { /* Add canvas dart animation here */ }
return { updateMessage, renderPlayers, updateScore, renderStats, animateDart };
})();
