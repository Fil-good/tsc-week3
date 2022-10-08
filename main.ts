
const readline = require('readline');

import { game } from "./src/tictactoe";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "please type the number where you want to place your symbol >"
});

game.render("");

rl.prompt();

rl.on('line', (line: string) => {


  if (line.toLowerCase() === "exit") {
    process.exit(0);
  }

    game.render(line);
    game.checkIfWinner(game.board);
    if (game.isGameOver != true) {
      rl.prompt();
    } else {
    process.stdout.write(`the winner is ${game.currentPlayer}`);
    }

}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
