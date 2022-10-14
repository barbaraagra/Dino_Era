class Controls {
    constructor(dino) {
        this.dino = dino;
    }
}

keyboardEvents() {
    window.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'ArrowLeft':
                if (this.car.x > 30) {
                    this.car.x -= 10;
                }
                break;
            case 'ArrowRight':
                if (this.car.x + this.car.w < 870) {
                    this.car.x += 10;
                }
                break;
        }
    });
}