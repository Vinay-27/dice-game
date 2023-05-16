var randnum1 = Math.floor(Math.random() * 6) + 1;
var imgsrc = "images/dice" + randnum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgsrc);

var randnum2 = Math.floor(Math.random() * 6) + 1;
var imgsrc = "images/dice" + randnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgsrc);

if (randnum1 > randnum2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
} else if (randnum1 < randnum2) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}
