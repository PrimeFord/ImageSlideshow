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

let i = 0;
left.addEventListener(
  "click",
  (previous = () => {
    display.style.backgroundImage = bg[i--];
  })
);

right.addEventListener(
  "click",
  (next = () => {
    display.style.backgroundImage = bg[i++];
  })
);
