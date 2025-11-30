const CameraInput = (() => {
async function captureThrow() {
UIManager.updateMessage("Capturing dart via camera...");
let dart = ["S20","T19","D5","25","50"][Math.floor(Math.random()*5)];
GameManager.scoreDart(dart);
}
return { captureThrow };
})();
