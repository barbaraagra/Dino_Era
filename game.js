const restartBtn = document.getElementById('restart-game')

class Game {
    constructor(difficulty) {
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
        this.controls2 = null;
        this.life = 30;
        this.img1 = new Image();
        this.img1.src = "docs/assets/images/heart-full.png";
        this.img2 = new Image();
        this.img2.src = "docs/assets/images/heart-oneemp.png";
        this.img3 = new Image();
        this.img3.src = "docs/assets/images/heart-twoemp.png";
        this.imgGameOver = new Image();
        this.imgGameOver.src = "docs/assets/images/gameoverscreen.png";
        this.imgWin = new Image();
        this.imgWin.src = "docs/assets/images/youwin.png"
        this.difficulty = difficulty;
        this.time = 60;
        this.timer = null;
        this.song = new Audio('docs/assets/sounds/DinoEra.mp3');
        this.song.loop = false;
        this.loseSong = new Audio('docs/assets/sounds/Losegame.wav');
        this.loseSong.loop = false;
        this.songCrash = new Audio('docs/assets/sounds/crashSound.mp3');
        this.songCrash.loop = false;

    }
    drawBackground() {
/*         this.background = document.getElementsByClassName('main-background')
 *//*         this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
 */    }
    start() {
        restartBtn.classList.add('hidden')
        if (this.difficulty === 1) {
            this.player = new Player(470, 400, 95, 90, this.ctx, "docs/assets/images/playereasy.png", "docs/assets/images/playereasy-flipped.png", 340, 460, 10, 10);
        } else if (this.difficulty === 2) {
            this.player = new Player(600, 370, 105, 90, this.ctx, "docs/assets/images/playernormal.png", "docs/assets/images/playernormal-flipped.png", 340, 460, 3, 3);
        } else if (this.difficulty === 3) {
            this.player = new Player(600, 200, 100, 75, this.ctx, "docs/assets/images/playerhard.png", "docs/assets/images/playerhard-flipped.png", 0, 280, 10, 10);
        }
        this.controls = new Controls(this.player);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
        this.timer = setInterval(() => {
            this.time--
        }, 1000)
        this.song.play();
    }
    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.updateObstacles();
        this.player.draw();
        this.checkWin();
        this.counter();
        this.checkGameOver();
    };


    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].y += 1;
            this.obstacles[i].x -= 1;

            this.obstacles[i].draw();
        }

        if (this.frames % 100 === 0) {
            this.obstacles.push(new Enemy(this.ctx));
        }
    }

    checkWin() {
        if (this.time === 0) {
            this.ctx.drawImage(this.imgWin, 0, 0, this.width, this.height);
            this.stop();
            restartBtn.classList.remove('hidden')
        }

    }

    checkGameOver() {

        for (let i = 0; i < this.obstacles.length; i++) {
            if (this.player.crashWith(this.obstacles[i])) {
                this.songCrash.play();
                this.life -= 10;
                this.obstacles.splice(i, 1);
            } else if (this.life === 30) {
                this.drawHearts1();
            } else if (this.life === 20) {
                this.drawHearts2();

            } else if (this.life === 10) {
                this.drawHearts3();

            } else if (this.life <= 0) {
                this.ctx.drawImage(this.imgGameOver, 0, 0, this.width, this.height);
                this.song.pause();
                this.loseSong.play();
                this.song.currentTime = 0;
                this.stop();
                restartBtn.classList.remove('hidden')
            }
        }
    }


    stop() {
        clearInterval(this.intervalId);
    }

    counter() {
        if (this.time === 0) {
            this.ctx.font = "22px Silkscreen";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(``, 690, 50)
        } else {
            this.ctx.font = "22px Silkscreen";
            this.ctx.fillStyle = "green";
            this.ctx.fillText(`00:${this.time}`, 690, 50)
        }
    };


    /* score() {
         this.ctx.font = '18px monospace';
         this.ctx.fillStyle = 'green';
         const score = Math.floor(this.frames / 5);
         this.ctx.fillText(`YEARS: ${score}`, 675, 40);
     }*/



    drawHearts1() {
        ctx.drawImage(this.img1, 35, 35, 80, 20);
    }

    drawHearts2() {
        ctx.drawImage(this.img2, 35, 35, 80, 20);
    }

    drawHearts3() {
        ctx.drawImage(this.img3, 35, 35, 80, 20);
    }


}