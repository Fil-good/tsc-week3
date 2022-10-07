
// make board class ? with properties type, but 1 board per game

class Board {
  public board: string[][] = [["1", "2", "3"],
                              ["4", "5", "6"],
                              ["7", "8", "9"]]; // 'string array' [], dus array van string arrays


  // update and render board
  public renderBoard (board: string[][], line: string, currentPlayer: string) {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(board[i][j]==line) {
          board[i][j]=currentPlayer;
        }
        process.stdout.write(board[i][j]);
      }
      process.stdout.write(`\n`);
    }
  }

  public checkIfWinner(board: string[][]) {

    let winnerCombos = [
      [[0][0], [0][1], [0][2]],
      [[1][0],[1][1],[1][2]],
      [[2][0], [2][1], [2][2]],
      [[0][0], [1][0], [2][0]],
      [[0][1], [1][1], [2][1]],
      [[0][2], [1][2], [2][2]],
      [[0][0], [1][1], [2][2]],
      [[0][2], [1][1], [2][0]]
    ];

    for (let [i1, i2, i3] of winnerCombos) {
      if(board[i1] === board[i2] &&
        board[i1] === board[i3]) {
        return true;
      }
    }
    return false;


  }

}

class Game extends Board {

  public currentPlayer: "X" | "O" = "O";
  public isGameOver = false;

  public render(line: string) {
    console.log("TIC - TAC - TOE");

    this.renderBoard(this.board, line, this.currentPlayer);

    (this.currentPlayer=="X") ? this.currentPlayer="O" : this.currentPlayer="X";

  }

  public command(line: string) {

    if(this.isGameOver != true) {
      process.stdout.write("go on!");
    }
  }
}

const game = new Game();

export { game };
