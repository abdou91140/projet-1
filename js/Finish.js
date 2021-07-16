function scoreDisplay() {
  let wrapper = document.querySelector(".finish");
  let end = document.createElement("img");
  let time = document.createElement("h1");
  time.innerHTML = localStorage.getItem("timer") + " secondes";
  time.setAttribute("id", "final-time");
  end.style.padding = 50 + "px";
  end.style.margin = "auto";
  end.style.backgroundSize = "cover";
  end.src = "../assets/gta1.svg";
  wrapper.append(end);
  end.after(time);
}
scoreDisplay();
const audioCrash = new Audio("../soundFx/crash.mp3");
const audioBo = new Audio("../soundFx/audioBo.mp3");

audioBo.volume = 0.7;
audioCrash.volume = 0.1;
audioCrash.play();
audioBo.play();
