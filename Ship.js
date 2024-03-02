class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.sWidth = canvas.width;
    this.sHeight = canvas.height;

    this.damage = false;

    this.color = "red";

    this.life = 100;
  }

  draw() {
    if (this.collision) this.getCollision();
    ctx.save();

    if (this.damage === true) {
      this.damage = false;

      ctx.shadowColor = "yellow";
    } else {
      ctx.shadowColor = this.color;
    }

    ctx.shadowBlur = 15;
    ctx.beginPath();

    var path = new Path2D();
    path.moveTo(this.ax + this.x, this.ay);
    path.lineTo(this.bx + this.x, this.by);
    path.lineTo(this.cx + this.x, this.cy);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fill(path);
    ctx.closePath();
    ctx.restore();

    if (this.life > 0) {
      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "16px serif";
      ctx.fillText(this.life + "", this.ax + this.x - 50, this.ay + 10);
      ctx.restore();
    }
  }

  delete() {
    delete this.x;
    delete this.y;
    delete this.ax;
    delete this.by;
    delete this.cx;

    console.log("DELETE");
    console.log(this);

    delete this;
  }

  getCollision() {
    bullets.forEach((bullet, i) => {
      if (typeof bullet.x !== "undefined") {
        if (
          bullet.y < this.by + 10 &&
          bullet.x >= this.cx &&
          bullet.x < this.ax
        ) {
          this.damage = true;
          this.life = this.life - 10;
          bullet.delete();
          bullets.splice(i, 1);
          score = score + 5;

          if (this.life < 1) {
            this.delete();
          }
        }
      }
    });
  }

  shoot() {
    bullets.push(new Bullet(130 + Ally.getX() + 43, 470));
  }

  right() {
    if (this.x < 120) this.x = this.x + 40;
  }

  left() {
    if (this.x > -120) this.x = this.x - 40;
  }

  go(x) {
    this.x = x - 175;
  }

  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }
}
