import Animation from './anim.js';
import * as Utils from './math.js';

const canvas = document.getElementById("cv");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let width = canvas.width, height = canvas.height;
let dots = [];
const boundary = new Animation(0,0,ctx, canvas);
const genDots = (number) => {
    for (let i = 0; i < number; i++) {
        dots.push(new Animation(Utils.floor(Utils.random(width)), Utils.floor(Utils.random(-height)), ctx, canvas))
    }
};
genDots((width + height) / 4);

const showDots = () => {
    for (let dot of dots) {
        dot.show();
        dot.update();
        boundary.expand(dot);

    }
};

const update = () => {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0, 0, width, height);
    canvas.addEventListener('mousemove', (event) => {
        boundary.pos.x = event.x;
        boundary.pos.y = event.y;
        boundary.r = 200;
    });

    boundary.boundary();
    showDots();

};

update();
