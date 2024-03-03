class Ally extends Ship {
  init() {
    this.y = 450;
    this.collision = false;
    this.img = new Image();
    this.color = "blue";
    this.img.src = "./assets/spaceship.svg";
  }
}
