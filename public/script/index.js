

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: 1
  });
document.body.appendChild(app.view)

//start
let start = new PIXI.Container();
let textStart = new PIXI.Text('Start',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
start.addChild(textStart)
app.stage.addChild(start)
console.log(textStart.width)
window.addEventListener('click',(e)=>{
  console.log(e.x)
  if(e.x > textStart.x && e.x < textStart.width && e.y > textStart.y && e.y < textStart.height){
    start.destroy()
    app.stage.addChild(game)
  }
})


//game
let game = new PIXI.Container();
//end game
let end = new PIXI.Container();
let textEnd = new PIXI.Text('You win',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
end.addChild(textEnd)





// let player = new PIXI.Graphics();
// player.lineStyle(2, 0x00ff00, 1);
// player.drawRect(110, 110, 30, 30);
// // player.anchor.x = 0.5;
// // player.anchor.y = 0.5;
// player.endFill();
// player.x = 0;
// player.y = 0


// app.loader.add('man', './')
// app.loader.load(manLoad)
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