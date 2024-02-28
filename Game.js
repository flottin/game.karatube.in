/**
 * Init game
 */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 100;

let bullets = [];
let stars = [];
let score = 0;
let count = 0;

Ally = new Ally();
Ally.init();

Enemy = new Enemy();
Enemy.init();
Score = new Score();

/**
 * Game loop
 */
function draw() {
  window.requestAnimationFrame(draw);
  count++;
  if (count % 10 === 0) {
    stars.push(new Star());
    count = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bullets.forEach((bullet, i) => {
    if (!bullet.live()) {
      bullets.splice(i, 1);
      console.log("delete bullets");
      console.log(bullets);
    }
  });

  stars.forEach((star) => star.live());

  Enemy.draw();
  Ally.draw();
  Score.draw();
}
window.requestAnimationFrame(draw);

/**
 * Events
 */
function clickEvent(e) {
  var rect = canvas.getBoundingClientRect();
  Ally.go(e.clientX - rect.x);
  Ally.shoot();
}

canvas.addEventListener("click", (e) => clickEvent(e));

canvas.addEventListener("touchstart", (e) => clickEvent(e));
