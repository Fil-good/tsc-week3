

class Game {

  public isGameOver = false;
  public board: string[][] = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]; // 'string array' [], dus array van string arrays

  // public answer: string = "";

  public render(line: string) {
    console.log("TIC - TAC - TOE");

    // private toObtainNumber = (line) => line === this.board[0][1];
    // this.board.findIndex(line => this.board[0].some === line);

    this.board[0][0] = line;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        process.stdout.write(this.board[i][j]);

        // process.stdout.write
      }
      process.stdout.write(`\n`);
      //escape enter
    }
  }

  public command(line: string) {

    if(this.isGameOver != true) {
      process.stdout.write("go on!");
    }
    // if (1 == 1) {
    //   this.answer = line;
    //   process.stdout.write(line);
    // };
    // // Perform game logic
  }

}

const game = new Game();



export { game };
