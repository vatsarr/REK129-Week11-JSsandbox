let myButton = document.querySelector("button");
let image = document.querySelector("img");
let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
  let randomNumber = Math.floor(Math.random() * images.length + 1);
  image.src = "images/image" + randomNumber + ".jpg";
  console.log(randomNumber);
}
