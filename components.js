class Controls {
    constructor(player) {
        this.player = player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                    if (this.player.y > this.player.upperY) {
                        this.player.y -= this.player.speedY;
                    }
                    break;
                case 'ArrowDown':
                    if (this.player.y < this.player.bottomY) {
                        this.player.y += this.player.speedY;
                    }
                    break;
                case 'ArrowLeft':
                    this.player.img.src = this.player.playerImg
                    if (this.player.x > 5) {
                        this.player.x -= this.player.speedX;
                    }
                    break;
                case 'ArrowRight':
                    this.player.img.src = this.player.flippedImg
                    if (this.player.x + this.player.w < 750) {
                        this.player.x += this.player.speedX;
                    }
                    break;
            }
        });
    }
}
