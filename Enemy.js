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

    var sWidth = canvas.width;
    var sHeight = canvas.height;
    var path = new Path2D();
    path.moveTo(sWidth / 2 + 40, 20);
    path.lineTo(sWidth / 2, 50);
    path.lineTo(sWidth / 2 - 40, 20);
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
