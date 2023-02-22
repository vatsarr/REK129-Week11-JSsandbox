let myButton = document.querySelector("button");
let myBox = document.querySelector(".box");
let colors = ["darkRed", "darkGreen", "darkBlue", "yellow", "pink"];

myButton.addEventListener("click", changeColor);

function changeColor() {
  //console.log(myBox);

  let randomNum = Math.floor(Math.random() * colors.length);
  myBox.style.backgroundColor = colors[randomNum];
}
