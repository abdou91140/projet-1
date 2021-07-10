class Car {
    constructor(x, y, speed, image) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.image = image;
    }
    moveToTheRight() {
        this.x += '1';
    }
    moveToTheLeft() {
        this.x -= '1';
    }
}
  export {Car}