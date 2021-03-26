
let arrCoins = []

function getRandomFloat(min, max){
    return Math.random() * (max - min) + min;
}

function checkCollaid(){
  if(arrCoins ){
    console.log(arrCoins.length)
    for(let i = 0; i < arrCoins.length; i++){
      console.log(i)
      collader( arrCoins[i],player)
    }
  }
}


function collader(object,player,action){
  console.log('collaid')
  let playerWidth =  player.width
  let playerHeight =  player.height
    console.log((object.x+object.width/2),(player.x + playerWidth/2))
     if((player.x + playerWidth/2) >= (object.x - object.width/2) && (player.x - playerWidth/2) <= (object.x+object.width/2) &&(player.y - player.height/2 <=object.y + object.height/2  ) && (player.y + player.height/2 >=object.y - object.height/2  )   ){
       console.log('collaid')
       object.destroy()
     }

    }


function createCoin(){
  let ellipse = new PIXI.Graphics();
  ellipse.lineStyle(2, 0x00ff00, 1);
  ellipse.drawEllipse(0, 50, 17, 25);
  ellipse.endFill();
  ellipse.x = getRandomFloat(0,app.view.width);
  ellipse.y = -50;
  arrCoins.push(ellipse)
  app.stage.addChild(ellipse);
  function moveDown(){
    ellipse.y = ellipse.y + 1;
    ellipse.rotation -= 0.01  ;
    // if(ellipse.y > 150){ellipse.destroy()}
  }

  app.ticker.add(()=>{moveDown()})


}

// app.ticker.add(()=>{checkCollaid()})
setInterval(createCoin, 5000);



