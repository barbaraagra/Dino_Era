/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        console.log('dino makes brrr')
        startGame();
    };

    function startGame() {
        let game = new Game();
        game.start();
    }
};

