class Score {
  constructor() {
    this.score = 0;
  }
  draw() {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "16px serif";
    ctx.fillText("Score: " + this.score + "", 250, 20);
    ctx.restore();
  }
  rise() {
    this.score = this.score + 5;
  }
}
