class Enemy {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * 500) - 100;
        this.y = 0;
        this.w = Math.floor(Math.random() * (350 - 50 + 1) + 50);
        this.h = 50;
        this.color = 'red';
    }

    draw() {
        ctx.fillStyle = 'this.color';
        ctx.arc(15, 15, 15, 0, Math.PI * 2, true);
        ctx.fill();
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.h;
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.w;
    }

}