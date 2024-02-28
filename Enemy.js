class Enemy {
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
    ctx.shadowColor = "red";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.restore();

    var sWidth = canvas.width;
    var sHeight = canvas.height;
    var path = new Path2D();
    path.moveTo(sWidth / 2 + 40, 60);
    path.lineTo(sWidth / 2, 10);
    path.lineTo(sWidth / 2 - 40, 15);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fill(path);
    ctx.closePath();
  }

  getY() {
    return this.y;
  }
}
