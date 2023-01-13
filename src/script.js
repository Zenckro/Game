const sonic = document.querySelector('.sonic');
const eggman= document.querySelector('.eggman');
//const audioJump = document.querySelector('.audiojump');
const gameOver = document.querySelector('.gameover');
const textStart = document.querySelector('#text-start')
/*=============================================================*/

/*========================Jump Settings========================*/
const jump = () => {
    sonic.classList.add('jump');

    //audioJump.currentTime = 0.1;
    //audioJump.volume = 0.1;
    //audioJump.play();

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}
/*=============================================================*/

/*========================Loop Settings========================*/
const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (eggmanPosition <= 120 && eggmanPosition > 0 && sonicPosition < 80) {
        eggman.style.animation = 'none';
        eggman.style.left = `${eggmanPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = './src/img/game-over.png';
        //sonic.style.width = '75px';
        sonic.style.marginLeft = '100px'

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong>";

        clearInterval(loop);
    }
}, 10);
/*=============================================================*/

/*===========================Keydown===========================*/
document.addEventListener('keydown', jump);
/*=============================================================*/