const SoundManager = (() => {
function playHitSound(dart) {
let audio = new Howl({src:['assets/sounds/dart_hit.mp3']});
audio.play();
}
return { playHitSound };
})();
