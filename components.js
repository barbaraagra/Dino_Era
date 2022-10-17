class Controls {
    constructor(dino) {
        this.dino = dino
    }

    keyboardEvents() {
        window.addEventListener('keyright', (e) => {
            switch (e.code) {
                case 'ArrowLeft':
                    if (this.player.x > 30) {
                        this.player.x -= 10;

                        this.x += this.speedX;
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.x + this.player.w < 770) {
                        this.player.x += 10;

                        this.x += this.speedX;
                    }
                    break;
            }
        });
    }
}