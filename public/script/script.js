
let app = new PIXI.Application({
  width: 500,
  height: 500,
  antialias: true,
  resolution: 1,
  backgroundColor:0x010056 
});
app.renderer.resize(innerWidth, 500);


var container = new PIXI.Container();
app.stage.addChild(container);

document.body.appendChild(app.view);

let player = new PIXI.Sprite.from('../img/player.bmp')
player.x = app.view.width / 2 ;
player.y = app.view.height / 2;
player.width = 30;
player.height = 30;
player.anchor.set(0.5);

// let whiteMAn = new PIXI.Sprite.from('./img/pngegg.png')
// whiteMAn.x = app.view.width / 2 - 80 ;
// whiteMAn.y = app.view.height / 2;
// whiteMAn.width = 90;
// whiteMAn.height = 90;
// whiteMAn.anchor.set(0.5);

app.loader.add('man', './img/pngegg.png')
app.loader.load(manLoad)
let whiteManBaseTexture = new PIXI.BaseTexture('./img/pngegg.png')
let whiteManTextueMassive = [
  new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(30,30,30,30)),
  new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(20,30,30,30)),
  new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(30,30,30,30))
]
let whiteManTextue = new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(60,60,50,50))
let whiteMan = new PIXI.AnimatedSprite(whiteManTextueMassive)
whiteMan.x = 200
whiteMan.y = 50
whiteMan.width = 30
whiteMan.height = 30

whiteMan.play()


function manLoad(){
  console.log('123124')
}





container.addChild(player,whiteMan);

function movePlayer(e) {
  switch (e.key) {
    case "a":
      player.x = player.x - 15;
      break;
    case "d":
      player.x = player.x + 15;
      break;
    case "s":
      player.y = player.y + 15;
      break;
    case "w":
      player.y = player.y - 15;
      break;
  }
}

window.addEventListener("keydown", movePlayer);
