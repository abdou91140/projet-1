import {Game} from './Game.js'
import {Car} from './Car.js';
import { Road } from './Road.js';

class Display {
  obstacleDisplay() {
    game.createObstacle()
    for (let i = 0; i < game.obstacles.length; i++) {
      let imgObstacle = document.createElement("img");
      imgObstacle.src = game.obstacles[i].image;
      imgObstacle.style.left =game.obstacles[i].x+'px'
      imgObstacle.style.top =game.obstacles[i].y+'px'
      imgObstacle.style.position = "relative"
      imgObstacle.setAttribute('id',"police-"+i)
      roadDom.append(imgObstacle)
    }

}
  carDisplay() {
    let imgCar = document.createElement("img");
    imgCar.src = car.image;
    imgCar.style.left =car.x+'px'
    imgCar.style.top =car.y+'px'
    imgCar.style.position="relative"
    imgCar.setAttribute('id','player-1')
    roadDom.appendChild(imgCar);
  }
  roadDisplay() {
    roadDom.style.backgroundImage = road.image
    roadDom.style.position = "relative"
    roadDom.style.backgroundPosition = road.x +"%"+ ""+ road.y+"%"
  }
  start() {
    this.carDisplay();
    this.roadDisplay()
    this.obstacleDisplay()
  }
  update(event) {
    if (car.x > 1 && car.x < 530) {
      game.direction(event)
      player.style.left = car.x + 'px'
      for (let i = 1; i < game.obstacles.length; i++) {
        let obstacle = document.getElementById('police-' + i)
        obstacle.style.top = game.obstacles[i].y
      }
      roadDom.style.backgroundPosition = road.x + "%" + "" + road.y + "%"
    }
  }
}



const car = new Car(230, 300, 0, "assets/player-car.png")
const road = new Road(0,0 ,"url(https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/17b8ffc08b8a20b.png)",car)
const game = new Game(car,road)
const display = new Display();
const roadDom = document.querySelector(".road");
display.start();
const player = document.querySelector('#player-1')
// console.log(player);
document.addEventListener('keydown',function (event) {
  display.update(event)
})
