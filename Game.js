const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 100;

bullets = []

Ship = new Ship()

function draw ()  {
    window.requestAnimationFrame(draw);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bullets.forEach(bullet => bullet.live());

    Ship.draw()
};

window.requestAnimationFrame(draw);

canvas.addEventListener("click", function(){
    bullets.push(new Bullet(150, 420)) 
});

canvas.addEventListener("touchstart", function(){
    bullets.push(new Bullet(150, 420)) 
});