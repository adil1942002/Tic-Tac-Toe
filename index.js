let boxes = document.querySelectorAll(".btn");
let playAgainBtn = document.querySelector("#playAgain");
let winnerSMS = document.querySelector(".winner");
let seclect = document.querySelector("#select");
let playerX = true;
const onChange = () => {
  let bodylihgt = document.querySelector("body").classList.add("bodyLight");
  let bodydark = document.querySelector("body").classList.add("bodyDark");
  if (seclect.value == "light") {
    seclect.value = bodylihgt;
    document.querySelector("body").classList.remove("bodyDark");
  } else {
    seclect.value = bodydark;
    document.querySelector("body").classList.remove("bodyLight");
  }
};
const winPatternsArrOfArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = () => {
  for (const winPatternArr of winPatternsArrOfArr) {
    let position1 = boxes[winPatternArr[0]].innerHTML;
    let position2 = boxes[winPatternArr[1]].innerHTML;
    let position3 = boxes[winPatternArr[2]].innerHTML;
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {
        winnerSMS.innerHTML = `Congratulations Winner is <br> {*${position1}*}`;
        winnerSMS.classList.remove("winner");
        disabledBtns();
      }
    }
  }
};
const checkDrow = () => {
  winnerSMS.innerHTML = `The Game was Tied`;
  winnerSMS.classList.remove("winner");
  disabledBtns();

  console.log("Game End");
};
let str = 0;
let end = 8;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      box.innerHTML = "X";
      playerX = false;
    } else {
      box.innerHTML = "O";
      playerX = true;
    }
    checkWinner();
    box.disabled = true;
    if (str == end) {
      checkDrow();
      checkWinner();
    }
    str++;
  });
});
const playAgain = playAgainBtn.addEventListener("click", () => {
  winnerSMS.classList.add("winner");
  boxes.forEach((x) => {
    x.innerHTML = "";
    str = 0;
    unabledBtns();
  });
});

const disabledBtns = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const unabledBtns = () => {
  for (const box of boxes) {
    box.disabled = false;
  }
};
