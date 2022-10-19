class Controls {
    constructor(player) {
        this.player = player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowLeft':
                    if (this.player.x > 5) {
                        this.player.x -= 10;
                    }
                    break;
                case 'ArrowRight':
                    if (this.player.x + this.player.w < 750) {
                        this.player.x += 10;
                    }
                    break;
            }
        });
    }
}