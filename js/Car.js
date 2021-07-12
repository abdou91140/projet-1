
export class Car {
    constructor(x, y, speed, image) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.image = image;
    }
    moveToTheRight() {
        this.x+=5;
    }
    moveToTheLeft() {
        this.x-=5;
    }
  accelarate() {
    this.speed += 2
  }
}
