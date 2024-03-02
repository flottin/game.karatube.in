class Bullet {
  constructor(x, y, damage) {
    this.x = x;
    this.y = y;
    this.damage = damage;
  }

  animate() {
    this.y = this.y - 6;
  }

  draw() {
    switch(this.damage){
      case 5:
        this.size = 4;
        break;
      case 10:
        this.size = 5;
        break;
    }
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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
        return false;
      }
      return true;
    }
    return false;
  }

  delete() {
    delete this.x;
    delete this.y;
    delete this.damage;
    delete this;
  }

  getY() {
    return this.y;
  }
}
