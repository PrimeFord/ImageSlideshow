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

var i = 0;
left.addEventListener(
  "click",
  (previous = () => {
    if (i > 0) {
      i--;
      console.log(i);
    } else {
      i = bg.length - 1;
    }
    display.style.backgroundImage = bg[i];
  })
);

right.addEventListener(
  "click",
  (next = () => {
    if (i < bg.length - 1) {
      i++;
      console.log(i);
    } else {
      i = 0;
    }
    display.style.backgroundImage = bg[i];
  })
);
