class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }

    drawBackground() {
        this.drawBackground.src = '../assets/images/mainbackground.jpg'
        this.ctx.drawImage(this.drawBackground, 0, 0, this.width, this.height);
    }

    start() {
        this.dino = new Player(450, 200, 50, 75, this.ctx);
        this.controls = new Controls(this.dino);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.drawBackground();
        this.dino.draw();
        this.updateObstacles();
        //  this.checkGameOver();
        //  this.score();
    };

    //PLAYER

    draw() {
        this.image.src = '../assets/images/playerone.png'
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.w;
    }

    //ENEMY

    class Enemy {
    constructor(ctx) {
        this.ctx = ctx;
        // pedir ajuda nessa parte
    }
}

draw(){
    this.image.src = '../assets/images/meteoro.png'
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}


updateAsteroids() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].y += 1;
        this.asteroids[i].draw();
    }

    if (this.frames % 80 === 0) {
        this.obstacles.push(new Enemy(this.ctx));
    }
}

