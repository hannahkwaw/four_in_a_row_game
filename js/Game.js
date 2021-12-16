class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  //to find the active player
  get activePlayer() {
    return this.players.find((player) => player.active);
  }

  createPlayers() {
    const players = [
      new Player("Player1", 1, "#e15258", true),
      new Player("Player2", 2, "#e59a13", false),
    ];
    return players;
  }
  startGame() {
    //gets the game ready
    /**
     * Initializes game.
     */
    this.board.drawHTMlBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
