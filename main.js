/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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

    function startGame(difficulty) {
        let startScreen = document.getElementById('start-screen')
        startScreen.classList.add('hidden')
        let game = new Game(difficulty);
        game.start();
    }
};

