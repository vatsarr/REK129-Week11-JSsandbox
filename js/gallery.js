let currentMainImage = document.querySelector(".gallery-image4 img");
let imagesToChooseFrom = document.querySelectorAll(".gallery img");

//console.log(imagesToChooseFrom);

imagesToChooseFrom.forEach((img) => img.addEventListener("click", imageClick));

function imageClick(e) {
  //console.log(e.target);
  imagesToChooseFrom.forEach((img) => (img.style.opacity = 1));
  currentMainImage.src = e.target.src;
  e.target.style.opacity = 0.5;
}
