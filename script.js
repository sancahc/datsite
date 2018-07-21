// Learn more about using JavaScript to interact with webpages:
// https://developer.mozilla.org/en-US/docs/Web/javascript

const LUCAS_COUNT = 7;
let lucasIncrement = 0;

const COLORS = [
  "rebeccapurple",
  "magenta",
  "lime",
  "violet",
  "red",
  "cyan",
  "yellow",
  "springgreen",
  "aqua",
  "orange",
  "crimson",
  "coral",
  "deeppink",
  "dodgerblue",
  "gold"
];
const button = document.getElementById("change-background-color");
const lucasButton = document.getElementById("increment-lucas");

button.addEventListener("click", changeBackgroundColor);
lucasButton.addEventListener("click", incrementLucas);

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("lucas-counter").innerText = LUCAS_COUNT;
  document.getElementById("url").innerText = window.location;
  document.getElementById("library-url").href = `beaker://library/${
    window.location
  }`;

  // is this a Dat-supported website? If so, use a dat:// URL for the beakerbrowser.com link
  const beakerLink = document.getElementById("beaker-url");
  if (window.DatArchive) {
    beakerLink.href = "dat://beakerbrowser.com";
  } else {
    beakerLink.href = "https://beakerbrowser.com";
  }
});

function changeBackgroundColor() {
  const maxIdx = COLORS.length - 1;
  const idx = Math.floor(Math.random() * Math.floor(maxIdx));
  const newColor = COLORS[idx];

  document.body.style.background = newColor;
}

function incrementLucas() {
  // if ITS OVER 9000! we have a problem
  lucasIncrement = Math.min(9000, lucasIncrement + 1);
  document.getElementById("lucas-counter").innerText =
    LUCAS_COUNT + lucasIncrement;
}
