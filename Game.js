/**
 * Init game
 */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/**
 * Game Object
 */
class Game {
  constructor() {
    this.score = new Score();
    this.bullets = [];
    this.stars = [];
    this.ally = new Ally(this.score, this.bullets);
    this.enemy = new Enemy(this.score, this.bullets);

    this.enemies = [];
    this.count = 0;

    this.init();
  }

  /**
   * Initialize values
   */
  init() {
    canvas.addEventListener("click", (e) => this.clickEvent(e), {
      passive: true,
    });

    canvas.addEventListener("touchstart", (e) => this.clickEvent(e), {
      passive: true,
    });

    window.requestAnimationFrame(() => {
      this.draw(this);
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Loop : main program
   */
  draw(thisElement) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.count++;
    if (this.count % 10 === 0) {
      this.stars.push(new Star());
      //this.count = 0;
    }

    if (this.count % 250 === 0) {
      this.enemies.push(
        new Enemy(this.score, this.bullets, this.getRandomInt(340))
      );

      this.count = 0;
    }

    this.score.draw();
    this.ally.draw();

    this.stars.forEach((star) => star.live());

    this.bullets.forEach((bullet, i) => {
      if (!bullet.live()) {
        this.bullets.splice(i, 1);
      }
    });

    this.enemies.forEach((enemy) => enemy.draw());

    window.requestAnimationFrame(() => {
      this.draw(thisElement);
    });
  }

  /**
   * Events
   */
  clickEvent(e) {
    var rect = canvas.getBoundingClientRect();
    this.ally.go(e.clientX - rect.x);
    this.ally.shoot();
  }
}

Game = new Game();
