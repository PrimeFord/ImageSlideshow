const bg = [0, 1, 2, 3, 4];
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const display = document.querySelector(".display");

left.addEventListener(
  "click"(
    (previous = () => {
      let i = 0;
      init--;
      display.style.background = `url(./media/${bg[i]}.jpeg)`;
      display.textContent = init;
    })
  )
);
