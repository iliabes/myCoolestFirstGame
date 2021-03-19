
let app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,
  resolution: 1
});
let coins = []
let pointNumber = 0


app.renderer.resize(innerWidth, 500);
document.body.appendChild(app.view);

let player = new PIXI.Sprite.from('../img/player.bmp')
player.x = app.view.width / 2 ;
player.y = app.view.height / 2;
player.width = 30;
player.height = 30;
player.anchor.set(0.5);

let point = new PIXI.Sprite.from('../img/coin.bmp')
point.x = 500;
point.y = 200;
point.width = 30;
point.height = 30;
point.anchor.set(0.5);



let text = new PIXI.Text(pointNumber,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
console.log(text)


function createCoin(number){
  for(let i = 0; i < number; i++){
    coordin = generateСoordinates()
    console.log('createCoin'+coordin)
    coin = new PIXI.Sprite.from('../img/pont.bmp')
    coin.x = coordin[0]
    coin.y = coordin[1]
    coin.width = 30
    coin.height = 30
    coin.anchor.set(0.5)
    coins.push(coin)
    app.stage.addChild(coin)
    app.ticker.add((delta) => {
      // rotate the container!
      // use delta to create frame-independent transform
      coin.rotation -= 0.01 * delta;
    });
  }
}

createCoin(1);




let wall = new PIXI.Sprite.from('../img/wall.bmp')
wall.x = 0;
wall.y = 0;
wall.height = 30;
wall.anchor.set(0.5);



app.stage.addChild(player,text);

function movePlayer(e) {
  switch (e.key) {
    case "a":
      player.x = player.x - 5;
      break;
    case "d":
      player.x = player.x + 5;
      break;
    case "s":
      player.y = player.y + 5;
      break;
    case "w":
      player.y = player.y - 5;
      break;
  }
}

function collader(player,object){

  let playerWidth = player.width;
  let playerHeight = player.height;
  coins.forEach((object,index)=>{
    // console.log('coin '+index + ' '+ object.x + 'player ' + player.x + ' ' + player.y)
    if(
      player.x + playerWidth / 2 >= object.x - object.width / 2 &&
      player.x - playerWidth / 2 <= object.x + object.width / 2 &&
      player.y - player.height / 2 <= object.y + object.height / 2 &&
      player.y + player.height / 2 >= object.y - object.height / 2
    ){
      console.log(index);
      coins[index].destroy();
      coins.splice(index,1)
      createCoin(1);
      checkPoint()
    }
  })

}

function checkPoint(){
  pointNumber = pointNumber + 1
  text.text = pointNumber
  if(pointNumber > 3){}
}

// function random(min, max) {
//   return min + Math.random() * (max - min);
function random(min, max){return Math.floor(Math.random() * (max - min + 1) + min)}

function generateСoordinates(){
  console.log(player.y)
  console.log(app.view.height/2)
  let coordinate = []
 if(player.x <= app.view.width/2){
  coordinate[0] = random(app.view.width/2 - player.width, app.view.width - 20)
  // console.log('<0.5')
 }
 if(player.x > app.view.width/2){
  coordinate[0] =  random(20, app.view.width/2 - player.width)
  // console.log('>0.5')
 }
  coordinate[0] =  random(20, app.view.width/2 - player.width)
 if(player.y <= app.view.height/2){
  coordinate[1] = random(app.view.height/2 + player.height, app.view.height)
  console.log('y<0.5')
 }
 if(player.y > app.view.height/2){
  coordinate[1] = random(0,app.view.height/2 + player.height)
  console.log('y>0.5')
 }

 console.log('generrate'+coordinate)
  return coordinate
}


window.addEventListener("keydown", movePlayer);
window.addEventListener("keydown", () => {collader(player, point);
});


// function collader(object, player, action) {
//   let playerWidth = player.width;
//   let playerHeight = player.height;
//   coins.forEach((item,index)=>{

//   })
//   if (
//     player.x + playerWidth / 2 >= object.x - object.width / 2 &&
//     player.x - playerWidth / 2 <= object.x + object.width / 2 &&
//     player.y - player.height / 2 <= object.y + object.height / 2 &&
//     player.y + player.height / 2 >= object.y - object.height / 2
//   ) {
//     console.log("collaid");
//     point.destroy();
//   }
// }


// function createCoin(){
//   console.log('createCoin')
//   coin = new PIXI.Sprite.from('../img/coin.bmp')
//   coin.x = 500 + 40 * coins.length
//   coin.y = 50
//   coin.width = 30
//   coin.height = 30
//   coins.push(coin)
//   app.stage.addChild(coin)
// }


