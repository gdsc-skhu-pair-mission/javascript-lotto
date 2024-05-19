/* eslint-disable import/extensions */
import Game from './Game.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  play() {
    const game = new Game();
    game.start();
  }
}

const app = new App();
app.play();

export default App;
