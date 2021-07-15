import { Obstacle } from "./Obstacle.js";
export class Game {
  constructor(car) {
    this.car = car;
    this.timer = 0;
    this.obstacle;
  }

  direction(event) {
    switch (event.code) {
      case "ArrowLeft":
        if (this.car.x > 0) {
          this.car.moveToTheLeft();
        }
        break;
      case "ArrowRight":
        if (this.car.x < 640) {
          this.car.moveToTheRight();
        }
        break;
      case "ArrowUp":
        if (this.car.y < 780) {
          this.car.goUp();
        }
        break;
      case "ArrowDown":
        if (this.car.y > 0) {
          this.car.goDown();
        }
        break;
    }
  }

  movementOfTheObstacle() {
    this.obstacle.y += this.timer;
  }
  createObstacle() {
    this.startTimer();
    let x = this.getRandomInt(0, 350);
    this.obstacle = new Obstacle(x, -200, "assets/police.png");
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  startTimer() {
    const intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
  }
}
