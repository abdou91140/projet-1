import { Obstacle } from "./Obstacle.js";
export class Game {
  constructor(car, road) {
    this.car = car;
    this.road = road;
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
        if (this.car.x < 460) {
          this.car.moveToTheRight();
        }
        break;
    }
  }
  movementOfTheCar() {
    this.road.y += this.car.speed;
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
    setInterval(() => {
      this.timer++;
    }, 1000);
  }
  // collision(){
  //   if(this.car.x)
  // }
}
