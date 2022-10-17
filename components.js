class Controls {
    constructor(player) {
        this.player = player;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowLeft':
                    /*  if (this.player.x > 30) {*/
                    this.player.x -= 10;
                    console.log('funciona!')
                    break;
                case 'ArrowRight':
                    /*   if (this.player.x + this.player.w < 770) {*/
                    this.player.x += 10;


                    break;
            }
        });
    }
}