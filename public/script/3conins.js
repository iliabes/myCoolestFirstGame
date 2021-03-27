
let arrCoins = []

function getRandomFloat(min, max){
    return Math.round(Math.random() * (max - min) + min)
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

  for(let i = 0; i < object.length; i++){
    console.log(app.stage.toGlobal(player))
    console.log(app.stage.toGlobal(arrCoins[0]))
    
  console.log(player.x,player.getGlobalPosition().x)
  let playerWidth =  player.width
  let playerHeight =  player.height
  // console.log(player.x,player.y,object[i].x,object[i].y)
     if((player.x + playerWidth/2) >= (object[i].x - object[i].width/2) && (player.x - playerWidth/2) <= (object.x+object[i].width/2) &&(player.y - player.height/2 <=object[i].y + object[i].height/2  ) && (player.y + player.height/2 >=object[i].y - object.height/2  )){
      // arrCoins.slice(1)
      console.log('asdasd')
       object[i].destroy()
     }
  }
}


function createCoin(){
  let ellipse = new PIXI.Graphics()
  ellipse.lineStyle(2, 0x00ff00, 1)
  ellipse.drawEllipse(0, 50, 17, 25)
  ellipse.endFill()
  ellipse.x = getRandomFloat(0,app.view.width)
  ellipse.x = 100
  ellipse.y = 100
  // ellipse.anchor.x = 0.5;
  // ellipse.anchor.y = 0.5;
  ellipse.y = -50
  arrCoins.push(ellipse)
  app.stage.addChild(ellipse)
  function moveDown(){
    ellipse.y = ellipse.y + 1;
    ellipse.rotation -= 0.01;
    // if(ellipse.y > 150){ellipse.destroy()}
  }
  app.ticker.add(()=>{moveDown()})
}


createCoin()


// app.ticker.add(()=>{checkCollaid()})
setInterval(createCoin, 5000);


setInterval(()=>{collader(arrCoins,player)},1000);

