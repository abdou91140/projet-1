import { Game } from "./Game.js";
import { Car } from "./Car.js";
import { Road } from "./Road.js";

class Display {
  obstacleDisplay() {
    let imgObstacle = document.createElement("img");
    imgObstacle.src = game.obstacle.image;
    imgObstacle.style.left = game.obstacle.x;
    imgObstacle.style.top = game.obstacle.y + "px";
    imgObstacle.style.position = "fixed";
    imgObstacle.setAttribute("class", "police");
    roadDom.append(imgObstacle);
  }
  carDisplay() {
    let imgCar = document.createElement("img");
    imgCar.src = car.image;
    imgCar.style.left = car.x + "px";
    imgCar.style.top = car.y + "px";
    imgCar.style.position = "relative";
    imgCar.setAttribute("id", "player-1");
    roadDom.appendChild(imgCar);
  }
  roadDisplay() {
    roadDom.style.backgroundImage = road.image;
    roadDom.style.position = "relative";
    roadDom.style.backgroundPosition = road.x + "%" + "" + road.y + "%";
  }
  start() {
    game.createObstacle();
    this.roadDisplay();
    this.carDisplay();
    this.obstacleDisplay();
  }
  update() {
    player.style.left = car.x + "px";
    let listObstacles = [...obstacles];
    listObstacles.forEach((ob) => {
      // console.log(
      //   roadDom.getBoundingClientRect().right,
      //   ob.getBoundingClientRect().x
      // );

      if (
        ob.getBoundingClientRect().y < roadDom.getBoundingClientRect().bottom &&
        ob.getBoundingClientRect().x < roadDom.getBoundingClientRect().right
      ) {
        game.movementOfTheObstacle();
        ob.style.left = game.obstacle.x + "px";
        ob.style.top = game.obstacle.y + "px";
      } else {
        let removePolice = document.querySelector(".road");
        if (listObstacles.length > 1) {
          removePolice.remove(listObstacles[listObstacles.length - 1]);
        }
      }
    });
  }
}

const car = new Car(230, 300, 0, "assets/player-car.png");
const road = new Road(
  0,
  0,
  "url(https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/17b8ffc08b8a20b.png)",
  car
);
const game = new Game(car, road);
const display = new Display();
const roadDom = document.querySelector(".road");
display.start();
const player = document.querySelector("#player-1");
const obstacles = document.getElementsByClassName("police");

document.addEventListener("keydown", function (event) {
  game.direction(event);
});

setInterval(() => {
  game.createObstacle();
  display.obstacleDisplay();
}, 10000);

setInterval(() => {
  display.update();
}, 400);

window.onload = function () {
  document.body.style.filter = "blur";
};
