class Player {
    constructor(x, y, w, h, ctx, playerImg, flippedImg, upperY, bottomY, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = playerImg;
        this.playerImg = playerImg;
        this.flippedImg = flippedImg;
        this.speedX = speedX;
        this.speedY = speedY;
        this.upperY = upperY;
        this.bottomY = bottomY;

    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }



    top() {
        return (this.y + 50);
    }
    bottom() {
        return (this.y - 20) + this.h;
    }
    left() {
        return (this.x + 20);
    }
    right() {
        return (this.x - 20) + this.w;
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