import { Obstacle } from "./Obstacle.js";
export class Game {
  constructor(car,roadSize) {
    this.car = car;
    this.timer = 0;
    this.obstacle;
    this.roadSize=roadSize;
  }

  direction(event) {
    console.log(this.roadSize);
    switch (event.code) {
      case "ArrowLeft":
        if (this.car.x > 0) {
          this.car.moveToTheLeft();
        }
        break;
      case "ArrowRight":
        if (this.car.x < this.roadSize.width-102) {
          this.car.moveToTheRight();
        }
        break;
      case "ArrowUp":
        if (this.car.y < this.roadSize.height - 150) {
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
    this.obstacle.y += 20;
  }
  createObstacle() {
    let x = this.getRandomInt(0, 350);
    this.obstacle = new Obstacle(x, -200, "assets/police.png");
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  startTimer() {
  setInterval(() => {
      this.timer++;
    }, 1000);
  }
}
