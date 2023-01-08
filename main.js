const left = document.querySelector(".left");
const right = document.querySelector(".right");
const display = document.querySelector(".display");

const bg = [
  `url(./media/0.jpeg)`,
  `url(./media/1.jpeg)`,
  `url(./media/2.jpeg)`,
  `url(./media/3.jpeg)`,
  `url(./media/4.jpeg)`,
];

// var currentIndex = 1;
// displaySlides(currentIndex);

// function displaySlides(num) {
//   var x;
//   var slides = document.getElementsByClassName("imageSlides");
//   if (num > slides.length) {
//     currentIndex = 1;
//   }
//   if (num < 1) {
//     currentIndex = slides.length;
//   }
//   for (x = 0; x < slides.length; x++) {
//     slides[x].style.display = "none";
//   }
//   slides[currentIndex - 1].style.display = "block";
// }

let i = 0;
left.addEventListener(
  "click",
  (previous = () => {
    if (i < 0) {
      i = bg.length;
      display.style.backgroundImage = bg[i];
    }
    display.style.backgroundImage = bg[i--];
    console.log(i);
  })
);

right.addEventListener(
  "click",
  (next = () => {
    if (i > bg.length) {
      i = 0;
      display.style.backgroundImage = bg[i];
    }
    display.style.backgroundImage = bg[i++];
    console.log(i);
  })
);
