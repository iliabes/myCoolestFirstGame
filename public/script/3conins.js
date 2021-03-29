let miniSpider;
let childSpaider;
let arrCoins = []
let meteors = []
let heals = 0
let coins = 1
let caterpillar;


function getRandomFloat(min, max){
    return Math.round(Math.random() * (max - min) + min)
}




function collader(object,player,action){
  for(let i = 0; i < object.length; i++){
  let playerWidth =  player.width
  let playerHeight =  player.height

  if((player.x + playerWidth/2) >= (object[i].x - object[i].width/2) &&
  (player.x - playerWidth/2) <= (object[i].x+object[i].width/2) &&
  (player.y - player.height/2 <=object[i].y + object[i].height/2  ) &&
  (player.y + player.height/2 >=object[i].y - object[i].height/2  )){
        action(object[i],[i])
     }
  }
}

function colladerOne(object,player,action){
  let playerWidth =  player.width
  let playerHeight =  player.height
  if((player.x + playerWidth/2) >= (object.x - object.width/2) &&
  (player.x - playerWidth/2) <= (object.x+object.width/2) &&
  (player.y - player.height/2 <=object.y + object.height/2  ) &&
  (player.y + player.height/2 >=object.y - object.height/2  )){
    action(object)
  }
}

function moveDown(object){
  for(let i = 0; i < object.length; i++){
    object[i].y = object[i].y+ 0.4;
    object[i].x = object[i].x+ 0.1;
    object[i].rotation -= 0.01;
    if(object[i].y > app.view.height + object[i].height){
      object[i].destroy()
      object.splice([i],1)
    }
  }

}

function createCoin(){
  let spiderTexture = new PIXI.BaseTexture('../img/larva.png')
  let spiderTextureMassive = []
  for(let i = 0; i < 10; i++){
  spiderTextureMassive.push(new PIXI.Texture(spiderTexture,new PIXI.Rectangle(60 * i,0,60,60)))
  }
  let ellipse = new PIXI.AnimatedSprite(spiderTextureMassive);
  ellipse.x = getRandomFloat(0,app.view.width)
  ellipse.y = -60
  ellipse.anchor.x = 0.5;
  ellipse.anchor.y = 0.5;
  ellipse.width = 30
  ellipse.height = 30
  ellipse.play()
  arrCoins.push(ellipse)
  game.addChild(ellipse)
}
function createSingleCoin(){
  let spiderTexture = new PIXI.BaseTexture('../img/larva.png')
  let spiderTextureMassive = []
  for(let i = 0; i < 10; i++){
  spiderTextureMassive.push(new PIXI.Texture(spiderTexture,new PIXI.Rectangle(60 * i,0,60,60)))
  }
  caterpillar = new PIXI.AnimatedSprite(spiderTextureMassive);
  caterpillar.x = 0
  caterpillar.y = -33
  caterpillar.anchor.x = 0.5;
  caterpillar.anchor.y = 0.5;
  caterpillar.width = 30
  caterpillar.height = 30
  caterpillar.play()
  caterpillar.rotation = 4.7
  player.addChild(caterpillar)
}

function collisionCoin(meteor,num){
  if(!player.haveEats){
    arrCoins[num].destroy()
    arrCoins.splice(num,1)
    createSingleCoin()
    player.haveEats = true;
  }
}

function createMeteor(){
  let meteorTexture = new PIXI.BaseTexture('../img/meteor.png')
  let meteorTextureMassive = []
  for(let i = 0; i < 10; i++){
    meteorTextureMassive.push(new PIXI.Texture(meteorTexture,new PIXI.Rectangle(60 * i,0,60,60)))
  }
  let meteor = new PIXI.AnimatedSprite(meteorTextureMassive);
  meteor.x = getRandomFloat(0,app.view.width)
  meteor.y = 60
  meteor.anchor.x = 0.5;
  meteor.anchor.y = 0.5;
  meteor.width = 30
  meteor.height = 30
  meteor.animationSpeed = 0.4
  meteor.play()
  meteors.push(meteor)
  game.addChild(meteor)
}

function collisionMeteor(meteor,num){
  meteors[num].destroy()
  meteors.splice(num,1)
  player.heals--;
  if(player.heals <= 0){
    text = 'You Lose'
    game.destroy()
    app.stage.addChild(endLoose)
  }
}



function createWebChildSpider(){
  let childSpiderTexture = new PIXI.BaseTexture('../img/spider.png')
  let childSpiderTextureMassive = [
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(0,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(60,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(120,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(180,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(240,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(300,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(360,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(420,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(480,0,60,60)),
  new PIXI.Texture(childSpiderTexture,new PIXI.Rectangle(540,0,60,60)),
]
 childSpaider = new PIXI.AnimatedSprite(childSpiderTextureMassive);
 childSpaider.x = getRandomFloat(0,app.view.width)
 childSpaider.x = 60
 childSpaider.y = 300
 childSpaider.anchor.x = 0.5;
 childSpaider.anchor.y = 0.5;
 childSpaider.width = 90
 childSpaider.height = 90
 childSpaider.animationSpeed = 0.2
 childSpaider.gotoAndStop(1)
 childSpaider.loop = false;
 childSpaider.rotation = 0
 childSpaider.dx = 4
 childSpaider.dy = .5




game.addChild(childSpaider)
}

function collisionSpiderchild(){
  if(player.haveEats){
    caterpillar.destroy()
    coins++
    player.haveEats = false
    childSpaider.gotoAndStop(coins)


    if(coins >= 10){
      clearInterval(coliisionWeb);
      clearInterval(animateWeb)
      createChildSpider()
      childSpaider.destroy()
    }
  }
}

function createChildSpider(){
  let spiderTexture = new PIXI.BaseTexture('../img/cosmospider/s.png')
let spiderTextureMassive = [
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(0,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(60,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(120,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(180,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(240,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(300,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(360,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(420,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(480,0,60,60)),
  new PIXI.Texture(spiderTexture,new PIXI.Rectangle(540,0,60,60)),
]


let miniSpider = new PIXI.AnimatedSprite(spiderTextureMassive);
miniSpider.x = childSpaider.x;
miniSpider.y = childSpaider.y;
miniSpider.anchor.x = 0.5;
miniSpider.anchor.y = 0.5;
miniSpider.haveEats = false;
miniSpider.play()
app.ticker.add(()=>{
  miniSpider.y = miniSpider.y - 3;

  if(miniSpider.y <= -60){
    game.destroy()
    app.stage.addChild(endWin)
  }
})
game.addChild(miniSpider)
}

//stars

function createStar(){
  let star = PIXI.Sprite.from('../img/star1.png');
  game.addChild(star)
}

function createCloud(){
  let cloud = PIXI.Sprite.from('../img/patch.png')
  game.addChild(cloud)

}
createStar()
createCloud()




createWebChildSpider()
setInterval(createCoin, 3000);
setInterval(createMeteor, 2000);
setInterval(()=>{collader(arrCoins,player,collisionCoin),collader(meteors,player,collisionMeteor)},300);
setInterval(()=>{moveDown(arrCoins),moveDown(meteors)},1);
let animateWeb = setInterval(()=>{
  childSpaider.rotation = childSpaider.rotation + .01
  childSpaider.x += childSpaider.dx
  childSpaider.y += childSpaider.dy
  // childSpaider.y += childSpaider.dy
  if(childSpaider.x > app.view.width - childSpaider.width/2 || childSpaider.x < 0){
    childSpaider.dx  = -childSpaider.dx 
  }
  if(childSpaider.y > app.view.height - childSpaider.width/2 || childSpaider.y < 0){
    childSpaider.dy  = -childSpaider.dy
  }
},.1)
let coliisionWeb =  setInterval(()=>{colladerOne(childSpaider,player,collisionSpiderchild)},.6)