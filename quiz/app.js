const girisEkrani = document.getElementById("girisEkrani");
const quizDiv = document.getElementById("quiz");
const startEl = document.getElementById("start");
const infoEl = document.getElementById("info");
const titleEl = document.getElementById("title");

const nextBtn = document.getElementById("next");

const pasEl = document.getElementById("pas");

const finishDiv = document.getElementById("bitisEkrani");
const newGame = document.getElementById("yeniOyun");
const restart = document.getElementById("basaDon");
const result = document.getElementById("result");
// start
startEl.addEventListener("click", (e) => {
  UI.startGame();
  getQuiz.getQuizFunc();
  UI.getQuestElement();
  UI.progress();
  UI.duration();
  e.preventDefault();
});
// NEXT
nextBtn.addEventListener("click", (e) => {
  UI.finish();
  e.preventDefault();
});

// progress
let progress___ = 0;
const progressEl = document.getElementById("progress");

// progress finish
let progressInterval;
let durationInterval;
let time = 10;
let progressWidth = 0;

// true - false
let correctOpt;
let trueNum = 0;
let falseNum = 0;
let pasNum = 0;
let soruSayisi = 1;
// pas
pasEl.addEventListener("click", () => {
  UI.pas();
});

// finish game

newGame.addEventListener("click", (e) => {
  UI.newGame();
  e.preventDefault();
});

restart.addEventListener("click", (e) => {
  UI.restart();
  e.preventDefault();
});
