class Enemy extends Ship {
  init() {
    var sWidth = canvas.width;
    var sHeight = canvas.height;

    this.ax = sWidth / 2 + 40;
    this.ay = 20;

    this.bx = sWidth / 2;
    this.by = 50;

    this.cx = sWidth / 2 - 40;
    this.cy = 20;

    this.collision = true;
  }
}
