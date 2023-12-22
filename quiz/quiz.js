class Quiz {
  constructor(ques, options, answer) {
    this.ques = ques;
    this.options = options;
    this.answer = answer;
  }
  static checkAnswer(answer_) {
    return answer_;
  }
}
const quiz = [
  new Quiz(
    "Muhabirin “takım yorgun muydu?” sorusuna Günde 15 saat çalışıp ayda birkaç yüz euro kazanıp evine dönen baba yorgun olur.. Biz değil.. ' diyerek cevap veren teknik direktör hangisidir?'",
    {
      a: "A: Jose Mourinho",
      b: "B: Pep Guardiola",
      c: "C: Carlo Ancelotti",
      d: "D: Aykut Kocaman",
    },
    "a"
  ),
  new Quiz(
    "En çok dünya kupası kazanan ülke hangisidir?",
    { a: "A: Fransa", b: "B: Brezilya", c: "Cebelitarık", d: "Amerika" },
    "b"
  ),
  new Quiz(
    "UEFA Şampiyonlar ligi finali hangi takımlar arasında ve hangi tarihte İstanbul’da oynanmıştır?",
    {
      a: "A: Liverpool – AC Milan (2005)",
      b: "B: Liverpool – A.Madrid (2005)",
      c: "C: Liverpool – A.Madrid (2004)",
      d: "D: Liverpool – AC. MİLAN (2004)",
    },
    "a"
  ),
  new Quiz(
    "Sergen Yalçın aşağıdaki takımların hangisinde forma giymemiştir?",
    {
      a: "A: Fenerbahçe",
      b: "B: Siirt Jet-Pa",
      c: "C: İstanbulspor",
      d: "D: Kayserispor",
    },
    "d"
  ),
  new Quiz(
    " Maradona hangi maçta “Tanrı’nın eli” diye adlandırılan golü atmıştır?",
    {
      a: "A: Arjantin – Almanya",
      b: "B: Arjantin – Brezilya",
      c: "C: Arjantin – İngiltere",
      d: "D: Türkiye - Brezilya",
    },
    "c"
  ),
];
