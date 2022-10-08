
// git comit is with one T !!!! so pushed to remote before comiting :-S

class Board {
  public board: string[][] = [["1", "2", "3"],
                              ["4", "5", "6"],
                              ["7", "8", "9"]]; // 'string array' [], dus array van string arrays

  // update and render board
  public renderBoard(board: string[][], line: string, currentPlayer: string) {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == line) {
          board[i][j] = currentPlayer;
        }
        process.stdout.write(board[i][j]);
      }
      process.stdout.write(`\n`);
    }
  }

  public checkIfWinner(board1: string[][]) {
    let winnerCombos = [
      [[0, 0], [0, 1], [0, 2]], /* per element van de array, de 2 indexen */
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
    // walk through the combos
    for (let [i1, i2, i3] of winnerCombos) { // i1 = [[0,0],..]
      if (board1[i1[0]][i1[1]].toString() === board1[i2[0]][i2[1]].toString() &&
        board1[i1[0]][i1[1]].toString() === board1[i3[0]][i3[1]].toString()) {
        // console.log("winner");
        game.isGameOver = true;
        break;
      }
    }
  }
}

class Game extends Board {

  public currentPlayer: "X" | "O" = "O";
  public isGameOver = false;

  public render(line: string) {
    console.log("TIC - TAC - TOE");

    this.renderBoard(this.board, line, this.currentPlayer);

    (this.currentPlayer == "X") ? this.currentPlayer = "O" : this.currentPlayer = "X";

  }

}

const game = new Game();

export { game };
