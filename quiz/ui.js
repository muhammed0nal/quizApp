let a = 0;
let optionsEl;
class UI {
  static startGame() {
    girisEkrani.style.visibility = "hidden";
    girisEkrani.style.opacity = "0";
    this.quizDivUiYes();
  }
  static getQuestElement() {
    infoEl.innerHTML = `
        <h1>Quiz App</h1>
         <div>
          <h2>${getQuiz.soruIndex + 1 + ". Soru"} </h2>
          <h2>10</h2>
        </div>`;

    titleEl.innerHTML = `
        <p>
         ${getQuiz.getQuizFunc().ques}
        </p>
        <div class="answers">
          <div id="a">
            <h3 id="a">${getQuiz.getQuizFunc().options.a}</h3>
            <span id="a">
               <i
                id="a-true"
                class="bx bx-check"
                style="display: none; color: #51f705"
              ></i>
              <i
                id="a-false"
                class="bx bx-x-circle"
                style="display: none; color: #f70505"
              ></i>
            </span>
          </div>
          <div id="b">
            <h3 id="b">${getQuiz.getQuizFunc().options.b}</h3>
            <span id="b">
             <i
                id="b-true"
                class="bx bx-check"
                style="display: none; color: #51f705"
              ></i>
              <i
                id="b-false"
                class="bx bx-x-circle"
                style="display: none; color: #f70505"
              ></i>
            </span>
          </div>
          <div id="c">
            <h3 id="c">${getQuiz.getQuizFunc().options.c}</h3>
            <span id="c" >
               <i
                id="c-true"
                class="bx bx-check"
                style="display: none; color: #51f705"
              ></i>
              <i
                id="c-false"
                class="bx bx-x-circle"
                style="display: none; color: #f70505"
              ></i>
            </span>
          </div>
          <div id="d">
            <h3 id="d">${getQuiz.getQuizFunc().options.d}  </h3>
            <span id="d">
               <i
                id="d-true"
                class="bx bx-check"
                style="display: none; color: #51f705"
              ></i>
              <i
                id="d-false"
                class="bx bx-x-circle"
                style="display: none; color: #f70505"
              ></i>
            </span>
          </div>
        </div>`;
    if (getQuiz.soruIndex == getQuiz.ques_.length - 1) {
      nextBtn.style.opacity = ".4";
      nextBtn.style.cursor = "pointer";
      nextBtn.disabled = "disabled";
    }

    optionsEl = document.querySelectorAll(".answers div");
    this.optionsElFunc(optionsEl);
  }
  static next() {
    getQuiz.next();
    this.pasUiYes();
    titleEl.style.pointerEvents = "auto";
    UI.getQuestElement();
    // this.finish();
  }
  static optionsElFunc(data) {
    correctOpt = Quiz.checkAnswer(getQuiz.getQuizFunc().answer);
    data.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (Quiz.checkAnswer(getQuiz.getQuizFunc().answer) === e.target.id) {
          this.answerClickTrue(e.target.id);
          clearInterval(progressInterval);
          clearInterval(durationInterval);
          this.nextTrue();
          this.pasUiNo();
        } else {
          this.answerClickFalse(e.target.id);
          clearInterval(progressInterval);
          clearInterval(durationInterval);
          this.nextTrue();
          this.pasUiNo();
        }
      });
    });
  }
  static progress() {
    progressEl.style.width = progressWidth + "px";
    // progressEl.style.animation = "progressBar 10s linear";
    progressInterval = setInterval(timer, 87);
    function timer() {
      progressWidth += 5;
      progressEl.style.width = progressWidth + "px";
      if (progressWidth == 550) {
        clearInterval(progressInterval);
        progressWidth = 0;
      }
    }
  }

  static duration() {
    this.nextFalse();
    durationInterval = setInterval(() => {
      time--;
      infoEl.innerHTML = `
        <h1>Quiz App</h1>
         <div>
          <h2>${getQuiz.soruIndex + 1 + ". Soru"} </h2>
          <h2>${time}</h2>
        </div>`;
      if (time == 0) {
        this.nextTrue();
        clearInterval(durationInterval);
        this.notOptionClick();
        time = 10;
        this.pasUiNo();
        titleEl.style.pointerEvents = "none";
      }
    }, 1000);
  }
  static nextTrue() {
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
    nextBtn.disabled = "";
  }
  static nextFalse() {
    nextBtn.style.opacity = ".4";
    nextBtn.style.cursor = "pointer";
    nextBtn.disabled = "disabled";
  }
  static answerClickTrue(true_) {
    const trueIcon = document.getElementById(`${true_}-true`);
    trueIcon.style.display = "block";
    optionsEl = document.querySelectorAll(".answers div");
    optionsEl.forEach((element) => {
      element.style.pointerEvents = "none";
      progressWidth = 0;
      time = 10;
    });
    trueNum++;
  }
  static answerClickFalse(false_) {
    const falseIcon = document.getElementById(`${false_}-false`);
    falseIcon.style.display = "block";
    optionsEl = document.querySelectorAll(".answers div");
    optionsEl.forEach((element) => {
      element.style.pointerEvents = "none";
      progressWidth = 0;
      time = 10;
    });
    falseNum++;
  }
  static notOptionClick() {
    let correctOptEl = document.getElementById(`${correctOpt}-true`);
    correctOptEl.style.display = "block";
    pasNum++;
  }
  static pas() {
    this.nextTrue();
    let correctOptEl = document.getElementById(`${correctOpt}-true`);
    correctOptEl.style.display = "block";
    time = 10;
    progressWidth = 0;
    pasNum++;
    this.pasUiNo();
    this.optionsUiNo();
    clearInterval(progressInterval);
    clearInterval(durationInterval);
  }
  static pasUiYes() {
    pasEl.style.opacity = "1";
    pasEl.style.cursor = "pointer";
    pasEl.disabled = "";
  }
  static pasUiNo() {
    pasEl.style.opacity = ".4";
    pasEl.style.cursor = "pointer";
    pasEl.disabled = "disabled";
  }
  static quizDivUiYes() {
    quizDiv.style.visibility = "visible";
    quizDiv.style.opacity = "1";
  }
  static quizDivUiNo() {
    quizDiv.style.visibility = "hidden";
    quizDiv.style.opacity = "0";
  }
  static finishDivUiYes() {
    finishDiv.style.visibility = "visible ";
    finishDiv.style.opacity = "1";
  }
  static finishDivUiNo() {
    finishDiv.style.visibility = "hidden";
    finishDiv.style.opacity = "0";
  }
  static optionsUiNo() {
    optionsEl = document.querySelectorAll(".answers div");
    optionsEl.forEach((element) => {
      element.style.pointerEvents = "none";
      progressWidth = 0;
      time = 10;
    });
  }
  static finish() {
    if (soruSayisi == getQuiz.ques_.length) {
      result.textContent = `Yarışmacı ${trueNum} tane doğru,
       ${falseNum} tane yanlış yapmıştır.
       ${pasNum} tane de boşu vardır.`;
      this.quizDivUiNo();
      this.finishDivUiYes();
    } else {
      UI.next();
      soruSayisi++;
      getQuiz.getQuizFunc();
      clearInterval(progressInterval);
      UI.progress();
      UI.duration();
    }
    if (soruSayisi == getQuiz.ques_.length) {
      nextBtn.textContent = "Bitir";
    }
  }
  static newGame() {
    getQuiz.soruIndex = 0;
    this.quizDivUiYes();
    this.finishDivUiNo();
    nextBtn.textContent = "Sonraki";
    titleEl.style.pointerEvents = "auto";
    soruSayisi = 1;
    trueNum = 0;
    falseNum = 0;
    pasNum = 0;
    getQuiz.getQuizFunc();
    this.getQuestElement();
    this.progress();
    this.duration();
    this.pasUiYes();
  }
  static restart() {
    window.location.reload();
  }
}
