import { Game } from "./Game.js";
import { Car } from "./Car.js";
import { Road } from "./Road.js";

class Display {
  obstacleDisplay() {
    let imgObstacle = document.createElement("img");
    imgObstacle.src = game.obstacle.image;
    imgObstacle.style.left = game.obstacle.x + "px";
    imgObstacle.style.top = game.obstacle.y + "px";
    imgObstacle.style.position = "absolute";
    imgObstacle.setAttribute("class", "police");
    roadDom.append(imgObstacle);
  }
  carDisplay() {
    let imgCar = document.createElement("img");
    imgCar.src = car.image;
    imgCar.style.left = car.x + "px";
    imgCar.style.bottom = car.y + "px";
    imgCar.style.position = "absolute";
    imgCar.setAttribute("id", "player-1");
    roadDom.appendChild(imgCar);
  }
  roadDisplay() {
    roadDom.style.backgroundImage = road.image;
    roadDom.style.position = "relative";
    roadDom.style.backgroundPosition = road.x + "%" + "" + road.y + "%";
  }
  timerDisplay() {
    timer.innerHTML = game.timer + "s";
  }
  scoreDisplay() {
    let wrapper = document.querySelector(".wrapper");
    wrapper.removeChild(roadDom);

    let loose = "./assets/loose.jpeg";
    wrapper.style.backgroundImage = loose;
  }
  start() {
    game.createObstacle();
    this.roadDisplay();
    this.carDisplay();
    this.obstacleDisplay();
    game.startTimer();
  }
  update() {
    player.style.left = car.x + "px";
    let listObstacles = [...obstacles];
    listObstacles.forEach((ob) => {
      if (
        ob.getBoundingClientRect().y < roadDom.getBoundingClientRect().bottom
      ) {
        game.movementOfTheObstacle();
        ob.style.left = game.obstacle.x + "px";
        ob.style.top = game.obstacle.y + "px";
        this.testerCollision(ob, player);
      } else {
        this.resetElementFromTheDom();
      }
    });
  }

  resetElementFromTheDom() {
    let obj = document.querySelector(".road");
    let last = obj.lastChild;
    obj.removeChild(last);
  }

  testerCollision(obstacle, player) {
    if (
      obstacle.getBoundingClientRect().x <
        player.getBoundingClientRect().x +
          player.getBoundingClientRect().width &&
      player.getBoundingClientRect().x <
        obstacle.getBoundingClientRect().x +
          obstacle.getBoundingClientRect().width &&
      player.getBoundingClientRect().y <
        obstacle.getBoundingClientRect().y +
          obstacle.getBoundingClientRect().height &&
      obstacle.getBoundingClientRect().y <
        player.getBoundingClientRect().y + player.getBoundingClientRect().height
    ) {
      this.crashSound();
      this.scoreDisplay();
    } else {
    }
  }
  intervalMethod() {
    setInterval(() => {
      game.createObstacle();
      display.obstacleDisplay();
    }, 10000);
  }
  crashSound() {
    const audio = document.querySelector("#crash");
    audio.style.src = "./soundFx/crash.mp3";
    audio.play();
  }
}

const car = new Car(230, 200, 0, "assets/player-car.png");
const road = new Road(
  0,
  0,
  "url(https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/17b8ffc08b8a20b.png)",
  car
);
const game = new Game(car, road);
const display = new Display();
const roadDom = document.querySelector(".road");
const btnStart = document.getElementById("start");
display.start();
const player = document.querySelector("#player-1");
const obstacles = document.getElementsByClassName("police");
const timer = document.getElementById("timer");

document.addEventListener("keydown", function (event) {
  game.direction(event);
});

setInterval(() => {
  display.update();
}, 400);
setInterval(() => {
  display.timerDisplay();
}, 1000);
// window.onload = function () {
//   const audio = document.querySelector("#bo");
//   audio.play();
// };
