const ScoreManager = (() => {
function calculateScore(dart, gameType) {
if(dart === "50") return 50;
if(dart === "25") return 25;
const type = dart.charAt(0);
const num = parseInt(dart.substring(1));
switch(type) {
case "S": return num;
case "D": return num*2;
case "T": return num*3;
default: return 0;
}
}
return { calculateScore };
})();
