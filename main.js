/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



let startScreen = document.getElementById('start-screen')
let game;

window.onload = () => {
    /*    document.getElementById('start-button').onclick = () => {
           startGame();
       }; */
    document.getElementById('start-screen__player-one').onclick = () => {
        startGame(1);
    };
    document.getElementById('start-screen__player-two').onclick = () => {
        startGame(2);
    };
    document.getElementById('start-screen__player-three').onclick = () => {
        startGame(3);
    };

    document.getElementById('restart-game').onclick = () => {
        game.ctx.clearRect(0, 0, 800, 550)
        game = null
        startScreen.classList.remove('hidden')
    }

    function startGame(difficulty) {
        startScreen.classList.add('hidden')
        game = new Game(difficulty);
        game.start();
    }
};

