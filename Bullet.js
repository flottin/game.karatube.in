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
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  live() {
    if (typeof this !== "undefined") {
      this.animate();
      this.draw();

      if (this.getY() < 5) {
        this.delete();
        console.log("DELETE");
        return false;
      }
      return true;
    }
    return false;
  }

  delete() {
    delete this.x;
    delete this.y;
    delete this;
    console.log("DELETE");
    console.log(this);
  }

  getY() {
    return this.y;
  }
}
