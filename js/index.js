import { Game } from "./Game.js";
import { Car } from "./Car.js";
// import { Road } from "./Road.js";

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

  timerDisplay() {
    timer.innerHTML = game.timer + "s";
  }

  start() {
    game.createObstacle();
    this.carDisplay();
    this.obstacleDisplay();
    game.startTimer();
  }
  update() {
    player.style.left = car.x + "px";
    player.style.bottom = car.y + "px";

    let listObstacles = [...obstacles];
    listObstacles.forEach((ob) => {
      if (ob.getBoundingClientRect().y > 0) {
        audioPolice.play();
      }
      if (
        ob.getBoundingClientRect().y < roadDom.getBoundingClientRect().bottom
      ) {
        game.movementOfTheObstacle();
        ob.style.left = game.obstacle.x + "px";
        ob.style.top = game.obstacle.y + "px";
        this.testerCollision(ob, player);
      } else {
        this.resetElementFromTheDom();
        this.intervalMethod();
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
      audioCar.muted = true;
      let lastTimerStorage = localStorage;
      lastTimerStorage.setItem("timer", game.timer);
      window.location.href = "pages/finish.html";
    } else {
    }
  }
  intervalMethod() {
    setInterval(() => {
      game.createObstacle();
      display.obstacleDisplay();
    }, 10000);
  }
}

const car = new Car(240, 200, 0, "assets/player-car.png");
const game = new Game(car);
const display = new Display();
const roadDom = document.querySelector(".road");
display.start();
const player = document.querySelector("#player-1");
const obstacles = document.getElementsByClassName("police");
const timer = document.getElementById("timer");

document.addEventListener("keydown", function (event) {
  game.direction(event);
});

setInterval(() => {
  display.update();
  for (let i = 0; i < game.timer; i++) {
    audioCar.play();
  }
}, 100);
setInterval(() => {
  display.timerDisplay();
}, 1000);
const audioCar = new Audio("soundFx/car-sound.mp3");
const audioPolice = new Audio("soundFx/police.mp3");
audioPolice.volume = 0.05;
audioCar.volume = 0.02;
