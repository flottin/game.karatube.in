class Score {
  draw() {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "16px serif";
    ctx.fillText("Score: " + score + "", 250, 20);
    ctx.restore();
  }
}
