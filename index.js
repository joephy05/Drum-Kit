const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    bInnerHtml = this.innerHTML;
    handleEvent(bInnerHtml);
    handleAnimation(bInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  handleEvent(event.key);
  handleAnimation(event.key);
});

function handleEvent(key) {
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "K":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("hi");
  }
}

function handleAnimation(key) {
  active = document.querySelector("." + key);

  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
