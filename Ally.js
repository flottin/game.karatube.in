class Ally extends Ship {
  init() {
    const bottom = 40;

    this.ax = this.sWidth / 2 + 40;
    this.ay = this.sHeight - bottom;

    this.bx = this.sWidth / 2;
    this.by = this.sHeight - 90 - bottom;

    this.cx = this.sWidth / 2 - 40;
    this.cy = this.sHeight - bottom;

    this.collision = false;

    this.color = "blue";
  }
}
