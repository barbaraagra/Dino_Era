class Player {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        const img = new Image();
        img.addEventListener("load", () => {
            this.img = img;
            this.draw();
        });
        img.src = "docs/assets/images/playerone.png";
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, 100, 100);
    }

    newPos() {
        this.x += this.speedX;

    }

    top() {
        return (this.y + 18);
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

    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }

}