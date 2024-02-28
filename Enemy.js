class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    var sWidth = canvas.width;
    var sHeight = canvas.height;
    this.ax = sWidth / 2 + 40;
    this.ay = 20;

    this.bx = sWidth / 2;
    this.by = 50;

    this.cx = sWidth / 2 - 40;
    this.cy = 20;

    this.damage = false;
  }

  animate() {
    this.y = this.y - 6;
  }

  getCollision() {
    bullets.forEach((bullet) => {
      if (typeof bullet.x !== "undefined") {
        if (bullet.y < this.by + 10) {
          this.damage = true;
        }
      }
    });
  }

  draw() {
    this.getCollision();
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.save();

    if (this.damage === true) {
      this.damage = false;
      ctx.shadowColor = "yellow";
    } else {
      ctx.shadowColor = "red";
    }

    ctx.shadowBlur = 15;
    ctx.beginPath();

    var path = new Path2D();

    path.moveTo(this.ax, this.ay);
    path.lineTo(this.bx, this.by);
    path.lineTo(this.cx, this.cy);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fill(path);
    ctx.closePath();
    ctx.restore();
  }

  getY() {
    return this.y;
  }
}
