class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  animate() {
    this.y = this.y - 6;
  }

  draw() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  live() {
    if (typeof this !== "undefined") {
      this.animate();
      this.draw();

      if (this.getY() < 100) {
        console.log(this.getY());
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
