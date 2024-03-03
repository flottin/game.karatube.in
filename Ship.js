class Ship {
  constructor(score, bullets, x = 170) {
    this.x = x;
    this.y = 0;

    this.score = score;
    this.bullets = bullets;
    this.damage = false;
    this.color = "red";
    this.life = 20;
    this.bulletDamage = 5;

    this.init();
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

    ctx.drawImage(this.img, this.x - 40, this.y);
    ctx.fillStyle = "white";

    ctx.restore();

    if (this.life > 0) {
      // ctx.save();
      // ctx.fillStyle = "white";
      // ctx.font = "16px serif";
      // ctx.fillText(this.life + "", this.ax + this.x - 50, this.ay + 10);
      // ctx.restore();
    }
  }

  delete() {
    delete this.x;
    delete this.y;
    delete this.life;
    delete this.color;
    delete this.damage;
    delete this.bulletDamage;

    delete this;
  }

  getCollision() {
    this.bullets.forEach((bullet, i) => {
      if (typeof bullet.x !== "undefined") {
        if (
          bullet.y < this.y + 30 &&
          bullet.y >= this.y - 30 &&
          bullet.x >= this.x - 30 &&
          bullet.x < this.x + 30
        ) {
          this.damage = true;
          this.life = this.life - 10;
          bullet.delete();
          this.bullets.splice(i, 1);
          this.score.rise();
          if (this.life < 1) {
            this.delete();
          }
        }
      }
    });
  }

  shoot() {
    this.bullets.push(new Bullet(this.getX(), 430, this.bulletDamage));
  }

  right() {
    if (this.x < 120) this.x = this.x + 40;
  }

  left() {
    if (this.x > -120) this.x = this.x - 40;
  }

  go(x) {
    this.x = x;
  }

  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }
}
