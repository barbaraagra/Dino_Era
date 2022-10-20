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

        let chooseplayer = document.getElementById('chooseplayer')
        chooseplayer.classList.add('hiddentxt')
    };
    document.getElementById('start-screen__player-two').onclick = () => {
        startGame(2);

        let chooseplayer = document.getElementById('chooseplayer')
        chooseplayer.classList.add('hiddentxt')
    };
    document.getElementById('start-screen__player-three').onclick = () => {
        startGame(3);

        let chooseplayer = document.getElementById('chooseplayer')
        chooseplayer.classList.add('hiddentxt')
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

