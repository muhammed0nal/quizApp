class GetQuiz {
  constructor(ques_) {
    this.ques_ = ques_;
    this.soruIndex = 0;
  }
  getQuizFunc() {
    return this.ques_[this.soruIndex];
  }
  next() {
    this.soruIndex++;
  }
}
const getQuiz = new GetQuiz(quiz);
