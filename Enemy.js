class Enemy extends Ship {
  init() {
    this.y = 10;
    this.collision = true;
    this.img = new Image();
    this.img.src = "./assets/spaceship-enemy.svg";
  }
}
