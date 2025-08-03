let gameSeq = [];
let userSeq = [];
let randbtn = ["red", "green", "blue", "yellow"];
let start = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game started");
    start = true;
  }
  levelUp();
});
let h2 = document.querySelector("h2");

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randnumber = Math.floor(Math.random() * 3);
  let randcolor = randbtn[randnumber];
  let randButton = document.querySelector(`.${randcolor}`);
  btnFlash(randButton);
  gameSeq.push(randcolor);
  console.log(gameSeq);
}

function btnFlashGreen(btn) {
  btn.classList.add("flashgreen");
  setTimeout(function () {
    btn.classList.remove("flashgreen");
  }, 250);
}
function checkAns(idx) {
  // let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
   
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! Your Scrore was <b>${level}</b> <br> Press any Key to Restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress(btn) {
  let btnn = this;
  console.log(btnn);
  btnFlashGreen(btnn);

  usercolor = btnn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
