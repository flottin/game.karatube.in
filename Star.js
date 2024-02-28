class Star {
  constructor() {
    this.x = this.getRandomInt(340);
    this.y = this.getRandomInt(10);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  animate() {
    this.y = this.y + 2;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  live() {
    if (typeof this !== "undefined") {
      this.animate();
      this.draw();

      if (this.getY() > 570) {
        delete this.x;
        delete this.y;
        delete this;
      }
    }
  }

  getY() {
    return this.y;
  }
}
