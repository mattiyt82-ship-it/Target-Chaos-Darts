const StatsManager = (() => {
function updateMPR(player) {
player.stats.MPR = (player.stats.totalScore / (player.stats.dartsThrown/3)).toFixed(2);
UIManager.renderStats(player);
}
return { updateMPR };
})();
