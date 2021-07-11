import {Game} from './Game.js'
import {Car} from './Car.js';
import {Obstacle} from './Obstacle.js';
import { Road } from './Road.js';
class Display {

  carDisplay() {
    let imgCar = document.createElement("img");
    imgCar.src = car.image;
    imgCar.style.left =car.x+'px'
    imgCar.style.top =car.y+'px'
    imgCar.style.position="relative"
    imgCar.setAttribute('id','player-1')
    let road = document.querySelector(".road");
    road.appendChild(imgCar);
  }
  roadDisplay() {
    let domRoad = document.querySelector('.road')
    domRoad.style.backgroundImage = road.image
  }
  start() {
    this.carDisplay();
  }
  update(event) {
   
    if (car.x > 0 && car.x < 400) {
      game.move(event)
      let imgCar = document.querySelector('#player-1')
        imgCar.style.left =car.x+'px'
    }
    
      // imgCar.style.left =car.y

  }
}
const car = new Car(230, 300, 110, "assets/player-car.png")
const obstacle = new Obstacle(0, 0, 110, "assets/police.png")
const road = new Road(0,300,"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/17b8ffc08b8a20b.png")
const game =new Game(car,obstacle)
const display = new Display();
display.start();
display.roadDisplay()
document.addEventListener('keydown',function (event) {

  console.log(x,y);
  display.update(event)

})
