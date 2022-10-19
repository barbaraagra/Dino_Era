class Enemy {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * 800) + 280;
        this.y = 0;
        this.w = 70;
        this.h = 70;
        this.img = new Image();
    }

    draw() {
        this.img.src = 'docs/assets/images/meteoro.png';
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
