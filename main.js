import { 
        coinData,
        heroData,
        barierUpData,
        barierDownData,
        barierUp2Data,
        barierUp3Data,
        barierDown2Data
    } from './data.js' 
 

 
import {
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
} from './constants.js'



returnGameButton.addEventListener('click',()=>{
    location.reload()
})

 //coins



 


function draw () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);
    ctx.drawImage(heroImage,heroData.x,heroData.y,heroData.width,heroData.height);
    ctx.drawImage(barierUp,barierUpData.x,barierUpData.y,barierUpData.width,barierUpData.height);
    ctx.drawImage(barierDown,barierDownData.x,barierDownData.y,barierDownData.width,barierDownData.height);
    ctx.drawImage(barierUp2,barierUp2Data.x,barierUp2Data.y,barierUp2Data.width,barierUp2Data.height);
    ctx.drawImage(barierDown2,barierDown2Data.x,barierDown2Data.y,barierDown2Data.width,barierDown2Data.height);
    ctx.drawImage(barerUp3,barierUp3Data.x,barierUp3Data.y,barierUp3Data.width,barierUp3Data.height)

};

function updates () {
    heroData.y += heroData.speed
    barierUpData.x -= barierUpData.speed
    barierDownData.x -= barierDownData.speed
    barierUp2Data.x -= barierUp2Data.speed
    barierDown2Data.x -= barierDown2Data.speed
    barierUp3Data.x -= barierUp3Data.speed

    //coin
    if(heroData.speed !== 0) {
        coinData.c += coinData.time
        coinTxt.innerHTML = Math.floor(coinData.c)
    }

}

function jumpLogic() {
    document.addEventListener('keydown',(evt)=>{
        if(evt.key == 'v') {

            heroData.speed = -2
            setTimeout(()=>{
                heroData.speed = 0.6
            },100)
        }
    })
}

function speedLogic (speed)  {
    barierDownData.speed = speed
    barierUpData.speed = speed
    barierUp2Data.speed = speed
    barierDown2Data.speed = speed
    barierUp3Data.speed = speed
}

function gameOverLogic () {
    gameOverModal.style.display = 'block'
    barierDownData.speed = 0
    barierUp2Data.speed = 0
    barierUpData.speed = 0
    barierUp3Data.speed = 0
    heroData.speed = 0
    deadSound.currentTime = 0
    barierDown2Data.speed = 0
    deadSound.play()
    coinsResult.innerHTML = ` ваши очки
    ${Math.floor(coinData.c)}`
}







function logics () {
    if(heroData.y + heroData.height - 10 > canvas.height) {
        
    }
    if(barierUpData.x + barierUpData.width < 0) {
        let random =  Math.floor(Math.random()* 200) + canvas.width
        let randomHeight = Math.floor(Math.random() * 50) + 40
        barierUpData.height = randomHeight
        barierUpData.x = random
    }

    if(barierUp3Data.x + barierUp3Data.width < 0) {
        let random =  Math.floor(Math.random()* 200) + canvas.width
        let randomHeight = Math.floor(Math.random() * 50) + 40
        barierUp3Data.height = randomHeight
        barierUp3Data.x = random
    }


    if(barierDownData.x + barierDownData.width < 0) {
        let random = Math.floor(Math.random()* 200) + canvas.width
        let randomHeight = Math.floor(Math.random()* 100) + barierDownData.height
        barierDownData.height = randomHeight
        barierDownData.x = random
    }

    if(barierDown2Data.x + barierDown2Data.width < 0) {
        let random = Math.floor(Math.random()* 200) + canvas.width
        let randomHeight = Math.floor(Math.random()* 100) + barierDown2Data.height
        barierDown2Data.height = randomHeight
        barierDown2Data.x = random
    }

    if(barierUp2Data.x + barierUp2Data.width < 0) {
        let random =  Math.floor(Math.random()* 400) + canvas.width;
        let randomHeight = Math.floor(Math.random()* 50) + 40
        barierUp2Data.x = random
        barierUp2Data.height = randomHeight
    }


    //game Over Logic

    if (heroData.x + heroData.width - 10 >= barierDownData.x && heroData.y - 10 + heroData.height >= barierDownData.y){
        gameOverLogic()
    }

    if (heroData.x + heroData.width - 10 >= barierDown2Data.x && heroData.y - 10 + heroData.height >= barierDown2Data.y){
        gameOverLogic()
    }


    
    if  (heroData.x + heroData.width - 10 >= barierUpData.x && heroData.y - 10   + heroData.height <= barierUpData.y  + barierUpData.height){
        gameOverLogic()
    }

    if  (heroData.x + heroData.width - 10 >= barierUp3Data.x && heroData.y - 10   + heroData.height <= barierUp3Data.y  + barierUp3Data.height){
        gameOverLogic()
    }


    if  (heroData.x + heroData.width - 10 >= barierUp2Data.x && heroData.y - 10 + heroData.height <= barierUp2Data.y + barierUp2Data.height + 5 ){
        gameOverLogic()
    }





    //  speed logic 
    switch(Math.floor(coinData.c)) {
        case 5:
            speedLogic(3)
            break;
        case 10:
            speedLogic(4)
            break;
        case 15:
            speedLogic(4.5)
            break;
        case 20:
            speedLogic(5)
            break;
        case 25:
            speedLogic(5.5)
            break
        case 30:
            speedLogic(6)
            break;
        case 35: 
            speedLogic(6.5)
            break;
        case 40:
            speedLogic(7)
            break
        case 50:
            speedLogic(8)
            break
    }

}


function loop() {
    requestAnimationFrame(loop)
    draw()
    updates()
    logics()
};

jumpLogic()
loop()