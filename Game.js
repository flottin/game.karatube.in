const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 100;

bullets = [];

Ship = new Ship(x, y);

Enemy = new Enemy(x, y);

let score = 0;

function draw() {
  window.requestAnimationFrame(draw);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bullets.forEach((bullet) => bullet.live());

  Enemy.draw();
  ctx.font = "16px serif";
  ctx.fillText("Score: " + score + "", 250, 20);

  Ship.draw();
}

window.requestAnimationFrame(draw);

canvas.addEventListener("click", function () {
  bullets.push(new Bullet(170, 460));
});

canvas.addEventListener("touchstart", function () {
  bullets.push(new Bullet(170, 460));
});
