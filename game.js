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
        this.imgWin.src = ""
        this.count

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
        this.timer();
        //   this.drawHearts1();
        //  this.score();
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
        this.ctx.font = "20px monospace";
        this.ctx.fillStyle = "green";
        this.count = 60 - (this.frames / 60);
        this.ctx.fillText(`Timer: ${this.count.toFixed(2)[0]}${this.count.toFixed(2)[1]}:${this.count.toFixed(2)[3]}${this.count.toFixed(2)[4]}`, 630, 50);
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