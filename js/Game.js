import { Obstacle } from "./Obstacle.js";
export class Game {
  constructor(car, road) {
    this.car = car;
    this.road = road;
    this.timer = 0;
    this.obstacles=[]
  }

  direction(event) {
    switch (event.code) {
      case "Space":
        this.startTimer();
        this.car.accelarate();
        this.movementOfTheCar()
        this.movementOfTheObstacle()
        // console.log(this.car.speed);
        break;
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
    this.obstacles.forEach(obstacle => {
      obstacle.y += this.car.speed/4;
    });
}
  createObstacle() {
    let x = Math.floor(Math.random() * 200)
    let i = 1
      let obstacle = new Obstacle(x, -200,"assets/police.png");
      this.obstacles.push(obstacle)
    // console.log(this.obstacles);
    return this.obstacles;
  }
  startTimer() {
    setInterval(() => {
      this.timer++;
    }, 1000);
  }
}
