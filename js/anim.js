import * as Utils from './math.js';

export default class Animation {
    constructor(x = 0, y = 0, ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.pos = Utils.vector(x, y);
        this.r = Utils.floor(Utils.random(10, 5));
        this.d = new Date();
        this.velY = 2;
        this.totalR = this.r;
        this.maxR = 2000;
        this.color = "rgba(255,255,255,0.8)";

        this.lastPos = this.pos.y;
    }

    show() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Utils.TWO_PI, false);
        this.ctx.fill();
    }

    update() {
        this.pos.y += this.r * (this.velY / this.d.getMilliseconds()) * this.d.getMilliseconds() * (60/this.d.getMilliseconds());
        this.pos.x += Utils.random(100) < 50 ? -0.9 : 0.9;
        this.pos.y += Utils.random(100) < 50 ? -0.9 : 0.9;

        this.outOfBounds();
    }

    outOfBounds() {
        if (this.pos.y > window.innerHeight + this.r) {
            this.pos.y = this.lastPos;
        }
    }

    boundary() {
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Utils.TWO_PI, false);
    }

    expand(other) {
        let distance = Math.sqrt(Math.pow(this.pos.x - other.pos.x, 2) + Math.pow(this.pos.y - other.pos.y, 2));
        if (distance <= Math.abs(other.r - this.r)) {
            other.r += 2;
            other.color = 'rgba(100,250,20,0.8)';
            if (other.r >= other.maxR) {
                other.r = other.maxR;
            }
        } else if (distance > Math.abs(other.r - this.r) && other.r > other.totalR) {
            while (other.r > other.totalR) {
                other.r -= 0.5;
            }
            other.color = 'rgba(255,255,255,0.8)';
        }
    }

}