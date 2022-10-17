class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.dino = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames = 0;
        this.width = 800;
        this.height = 550;
        this.background = new Image();
        this.controls = null;

        const img1 = new Image();
        img1.addEventListener("load", () => {
            this.img1 = img1;
        });
        img1.src = "docs/assets/images/heart-full.png";


        const img2 = new Image();
        img2.addEventListener("load", () => {
            this.img2 = img2;
        });
        img2.src = "docs/assets/images/heart-oneemp.png";


        const img3 = new Image();
        img3.addEventListener("load", () => {
            this.img3 = img3;
        });
        img3.src = "docs/assets/images/heart-twoemp.png";


    }
    drawBackground() {
/*         this.background = document.getElementsByClassName('main-background')
 *//*         this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
 */    }
    start() {
        this.player = new Player(100, 420, 50, 75, this.ctx);
        this.controls = new Controls(this.player);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }
    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.updateObstacles();
        this.player.draw();
        this.checkGameOver();
        this.drawHearts1();
        this.score();
    };


    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].y += 1;
            this.obstacles[i].x -= 1;

            this.obstacles[i].draw();
        }

        if (this.frames % 80 === 0) {
            this.obstacles.push(new Enemy(this.ctx));
        }
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if (crashed) {
            this.drawHearts2();
            this.drawHearts3();
            this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }

    score() {
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'green';
        const score = Math.floor(this.frames / 5);
        this.ctx.fillText(`Score: ${score}`, 675, 40);
    }

    drawHearts1() {
        ctx.drawImage(this.img1, 35, 35, 80, 20);
    }

    drawHearts2() {
        ctx.drawImage(this.img2, 35, 60, 80, 20);
    }

    drawHearts3() {
        ctx.drawImage(this.img3, 35, 80, 80, 20);
    }


}