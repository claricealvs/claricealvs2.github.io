const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")
const buttonBack = document.querySelector(".btn-back")

const gameOver = () => {
    direction = undefined

    menu.style.display = "flex"
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOver()

        clearInterval(loop);
    }
    
    }, 10);

document.addEventListener('keydown', jump);

buttonPlay.addEventListener("click", () => {

    location.reload()
})

function voltar(){
    window.location.href = "https://claricealvs.github.io/claricealvs2.github.io/"
}

buttonBack.addEventListener("click", () => {
    voltar()
})

