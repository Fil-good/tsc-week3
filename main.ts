
const readline = require('readline');

import { game } from "./src/tictactoe";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

game.render("");

rl.prompt();

rl.on('line', (line: string) => {


  if (line.toLowerCase() === "exit") {
    process.exit(0);
  }

  if(game.isGameOver != true) {

  game.render(line);

  game.command(line.trim());

  rl.prompt();

  } else {
    game.render("");

  }

}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
