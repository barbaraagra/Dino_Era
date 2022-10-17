class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.dino = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames = 0;
        this.width = 800;
        this.height = 500;
        this.background = new Image();
        this.controls = null;
    }
    drawBackground() {
/*         this.background = document.getElementsByClassName('main-background')
 *//*         this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
 */    }
    start() {
        this.dino = new Player(100, 420, 50, 75, this.ctx);
        this.intervalId = setInterval(this.update, 1000 / 60);
    }
    update = () => {
        this.updateObstacles();
        this.checkGameOver();
        this.score();
    };

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].y += 1;
            this.obstacles[i].draw();
        }

        if (this.frames % 120 === 0) {
            this.obstacles.push(new Enemy(this.ctx));
        }
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.dino.crashWith(obstacle);
        });

        if (crashed) {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }

    score() {
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'black';
        const score = Math.floor(this.frames / 5);
        this.ctx.fillText(`Score: ${score}`, 100, 50);
    }
}