const game = new Game();

const begin = document.getElementById("begin-game");

begin.addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
