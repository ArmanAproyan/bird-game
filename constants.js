 
 const canvas = document.querySelector('canvas');
 const ctx = canvas.getContext("2d");
 const backgroundImg = document.createElement('img');
backgroundImg.src = '/pictures/background.jpg';
 const heroImage = document.createElement('img');
 heroImage.src = '/pictures/hero.png';
 const barierUp = document.createElement('img');
 barierUp.src = '/pictures/upBarier.png';
 const barierDown = document.createElement('img');
 barierDown.src = '/pictures/downBarier — копия.png';
 const barierUp2 = document.createElement('img');
 barierUp2.src = '/pictures/upBarier.png';
 const barierDown2 = document.createElement('img');
 barierDown2.src = '/pictures/downBarier — копия.png';
 const barerUp3 = document.createElement('img');
  barerUp3.src = '/pictures/upBarier.png';

 //audio
 const deadSound = document.createElement('audio');


 const returnGameButton = document.querySelector('.returnGame');

 const gameOverModal = document.querySelector('.gameOverModal');

//return game

const coinTxt = document.querySelector('.coinBlock h1')
const coinBlock = document.querySelector('.coinBlock')
const coinsResult = document.querySelector('.txtBlock h1');
const coin = document.createElement('img');
coinBlock.appendChild(coin)
 coin.src = "/pictures/coin.png";
 coin.style.width = '50px'
 coin.style.height = '50px'

export {
    canvas,
    ctx,
    backgroundImg,
    heroImage,
    barierUp,
    barierDown,
    barierUp2,
    barierDown2,
    barerUp3,
    deadSound,
    returnGameButton,
    gameOverModal,
    coinTxt,
    coinBlock,
    coinsResult,
    coin
}