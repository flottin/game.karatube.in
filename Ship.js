class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  right() {
    if (this.x < 350)
    this.x = this.x + 6;
  }
  
  left() {
    if (this.x > 0)
    this.x = this.x - 6;
  }

  draw() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.shadowColor = "green";
    ctx.shadowBlur = 15;
    ctx.beginPath();

    var sWidth = canvas.width;
    var sHeight = canvas.height;
    var path = new Path2D();
    path.moveTo(sWidth / 2 + 40, sHeight - 5);
    path.lineTo(sWidth / 2, sHeight - 70 - 5);
    path.lineTo(sWidth / 2 - 40, sHeight - 5);
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
