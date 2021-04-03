

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: 1
  });
document.body.appendChild(app.view)

//start
let start = new PIXI.Container();
let front = PIXI.Sprite.from('../img/cosmospider/cosmospiderFront.png')
front.anchor.x = 0.5;
front.anchor.y = 0.5;
front.x = app.view.width/2
front.y = app.view.height/2 - 100
start.addChild(front)


let textStart = new PIXI.Text('Start',{fontFamily : 'Arial', fontSize: 34, fill : 0xff1010, align : 'center'});
textStart.x = 0
textStart.y = 0
start.addChild(textStart)


textStart.x = Math.round(app.view.width/2)
textStart.y = Math.round(app.view.height/2 + 150)
textStart.anchor.x = 0.5;
textStart.anchor.y = 0.5;
app.stage.addChild(start)
console.log(textStart.width)
window.addEventListener('click',(e)=>{
  console.log(e.x,e.y,textStart.x,textStart.y)
  console.log(e.y > textStart.y && e.y <textStart.y +  textStart.height)
  if(e.x > textStart.x -50 && e.x <textStart.x + 50 + textStart.width && e.y > textStart.y && e.y <textStart.y +  textStart.height){
    startGame()
  }
})
function startGame(){
  console.log('vvvv')
  start.destroy()
  app.stage.addChild(game)
}

//game

let game = new PIXI.Container();
//end game

let endLoose = new PIXI.Container();
let lose = PIXI.Sprite.from('../img/cosmospider/lose.png')
lose.anchor.x = 0.5;
lose.anchor.y = 0.5;
lose.x = app.view.width/2
lose.y = app.view.height/2 - 100
endLoose.addChild(lose)

let endWin = new PIXI.Container();
let win = PIXI.Sprite.from('../img/cosmospider/wine.png')
win.anchor.x = 0.5;
win.anchor.y = 0.5;
win.x = app.view.width/2
win.y = app.view.height/2 - 100
endWin.addChild(win)
let textEndWin = new PIXI.Text('You Win',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
let textEndLose = new PIXI.Text('You Lose',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
endLoose.addChild(textEndLose)
endWin.addChild(textEndWin)




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


let player = new PIXI.AnimatedSprite(spiderTextureMassive);
player.heals = 3;
player.anchor.x = 0.5;
player.anchor.y = 0.5;
player.haveEats = false;

game.addChild(player)
player.x = 500
player.y = 500

function gameOver(){}