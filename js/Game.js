class Game {
  constructor(car, obstacle) {
    this.car = car;
    this.obstacle = obstacle;
  }

  move(event) {
    switch (event.key) {
      case "Space":
        break;
      case "ArrowLeft":
        this.car.moveToTheLeft();
        // console.log("left");
        break;
      case "ArrowRight":
        this.car.moveToTheRight();
        // console.log("right");
        break;
    }
  }
}

export { Game };
