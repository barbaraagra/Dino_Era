class Player {
    constructor(x, y, w, h, ctx, playerImage) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = playerImage;


    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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