import Board from './Board';
import { gameControls, msgPanel } from './functions';

export default class Game {
  static a;
  static b;
  static nextBall;
  static timerId;
  static gameStatus = 0; // 0 - neprasidejes, 1 - einantis, 2 - sustojes
  static msg;

  static loadGame() {
    this.a = new Board('a');
    this.b = new Board('b');
    this.controls = gameControls();
    this.msg = msgPanel();
    this.controls.timer.innerText = 0;
    this.controls.start.addEventListener('click', () => {
      this.startGame();
    });
    this.controls.reset.addEventListener('click', () => {
      this.resetGame();
    });
    this.msg.innerText = 'Press Start to begin!';
  }

  static startGame() {
    if (this.gameStatus > 0) {
      return;
    }
    this.gameStatus = 1;
    this.a.fillWithNewBalls();
    this.nextBall = 1;
    this.startTimer();
    this.msg.innerText = 'Game Started';
  }

  static endGame() {
    this.gameStatus = 2;
    this.stopTimer();
    this.a.clearBalls();
    this.b.clearBalls();
    this.msg.innerText = 'Well Played!';
    this.controls.timer.innerText = 0;
  }

  static goToNext() {
    this.nextBall++;
    if (this.nextBall > 3) {
      this.endGame();
    }
  }

  static ballClick(number, ball) {
    if (this.nextBall == number) {
      this.msg.innerText = 'Nice one!';
      this.moveBall(ball);
      this.goToNext();
    } else {
      this.msg.innerText = 'Oof, try again...';
    }
  }

  static moveBall(ball) {
    this.b.gameBoard[this.nextBall - 1].appendChild(ball);
  }

  static startTimer() {
    let time = 0;
    this.timerId = setInterval(() => {
      this.controls.timer.innerText = ++time;
    }, 1000);
  }

  static stopTimer() {
    clearInterval(this.timerId);
  }

  static resetGame() {
    this.gameStatus = 0;
    this.controls.timer.innerText = 0;
    this.a.clearBalls();
    this.b.clearBalls();
    this.stopTimer();
    this.msg.innerText = 'Press Start to begin!';
  }
}
