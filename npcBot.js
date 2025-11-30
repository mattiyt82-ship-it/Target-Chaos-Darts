const NPCManager = (() => {
function botThrow(player) {
let targets = ["S20","T20","D20","25","50"];
let dart = targets[Math.floor(Math.random()*targets.length)];
GameManager.scoreDart(dart);
}
return { botThrow };
})();
