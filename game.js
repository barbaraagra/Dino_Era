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
        this.life = 30;
        this.img1 = new Image();
        this.img1.src = "docs/assets/images/heart-full.png";
        this.img2 = new Image();
        this.img2.src = "docs/assets/images/heart-oneemp.png";
        this.img3 = new Image();
        this.img3.src = "docs/assets/images/heart-twoemp.png";
        this.imgGameOver = new Image();
        this.imgGameOver.src = "docs/assets/images/gameover.png";
        this.imgWin = new Image();
        this.imgWin.src = "docs/assets/images/youwin.png"
        this.difficulty = difficulty;

    }
    drawBackground() {
/*         this.background = document.getElementsByClassName('main-background')
 *//*         this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
 */    }
    start() {
        if (this.difficulty === 1) {
            this.player = new Player(100, 420, 50, 75, this.ctx, "docs/assets/images/playerone.png");
        } else if (this.difficulty === 2) {
            this.player = new Player(100, 200, 90, 40, this.ctx, "docs/assets/images/playertwo.png");
        } else if (this.difficulty === 3) {
            this.player = new Player(100, 420, 90, 90, this.ctx, "docs/assets/images/playerthree.png");
        }

        this.controls = new Controls(this.player);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }
    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.updateObstacles();
        this.player.draw();
        this.checkWin();
        this.checkGameOver();
        this.timer();
    };


    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].y += 1;
            this.obstacles[i].x -= 1;

            this.obstacles[i].draw();
        }

        if (this.frames % 110 === 0) {
            this.obstacles.push(new Enemy(this.ctx));
        }
    }

    checkWin() {
        if (this.count <= 0) {
            this.ctx.drawImage(this.imgWin, 0, 0, this.width, this.height);
            this.stop();
        }

    }

    checkGameOver() {

        for (let i = 0; i < this.obstacles.length; i++) {
            if (this.player.crashWith(this.obstacles[i])) {
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
                this.stop();
            }
        }
    }



    stop() {
        clearInterval(this.intervalId);
    }

    timer() {
        this.ctx.font = "22px Silkscreen";
        this.ctx.fillStyle = "green";
        let seconds = Math.floor(60 - (this.frames / 60))
        this.ctx.fillText(`00:${seconds}`, 690, 50)
    };


    /* score() {
         this.ctx.font = '18px monospace';
         this.ctx.fillStyle = 'green';
         const score = Math.floor(this.frames / 5);
         this.ctx.fillText(`YEARS: ${score}`, 675, 40);
     }*/

    //COUNTDOWN
    /*    const timeH = document.querySelector('#countdown');
        let timeSecond = 60;
     
    display(timeSecond)
     
    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown);
        }
    }, 1000)
     
    function displayTime(second) {
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
    } */

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