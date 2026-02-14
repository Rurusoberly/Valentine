const moveRandom = document.querySelector("#move-random");
const yesBtn = document.querySelector("#yes-btn");

let yesScale = 1; // starting size

function moveRandomEl(elm) {
  elm.style.position = "absolute";

  const x = Math.floor(Math.random() * 80 + 10);
  const y = Math.floor(Math.random() * 80 + 10);

  elm.style.left = x + "%";
  elm.style.top = y + "%";
}

function growYesBtn() {
  yesScale += 0.2; // growth speed
  yesBtn.style.transform = `scale(${yesScale})`;
}

// PC hover
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
  growYesBtn();
});

// Mobile click
moveRandom.addEventListener("click", function (e) {
  e.preventDefault();
  moveRandomEl(e.target);
  growYesBtn();
});

// Touch support
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveRandomEl(e.target);
  growYesBtn();
});
