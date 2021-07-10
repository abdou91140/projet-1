import {Game} from './Game.js'
import {Car} from './Car.js';
import {Obstacle} from './Obstacle.js';

class Display {

  carDisplay() {
    let imgCar = document.createElement("img");
    imgCar.src = car.image;
    imgCar.style.left =car.x
    imgCar.style.top =car.y
    imgCar.style.position="relative"
    imgCar.setAttribute('id','player-1')
    let road = document.querySelector(".road");
    road.appendChild(imgCar);
  }
  start() {
    this.carDisplay();
  }
  update(event) {
      game.move(event)
      let imgCar = document.querySelector('#player-1')
    console.log(car.x);
    if (car.x > 0) {
        imgCar.style.right =car.x
    }
    
      // imgCar.style.left =car.y

  }
}
const car = new Car('230px', '300px', 110, "assets/player-car.png")
const obstacle = new Obstacle(0, 0, 110, "assets/police.png")
const game =new Game(car,obstacle)
const display = new Display();
display.start();
document.addEventListener('keydown',function (event) {

  display.update(event)

})
