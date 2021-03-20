
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



// let animatedImg = ['../img/curcle/1.png','../img/curcle/2.png','../img/curcle/3.png','../img/curcle/4.png','../img/curcle/5.png','../img/curcle/6.png','../img/curcle/7.png','../img/curcle/8.png']
// let textureArr = []
// for(let i = 0; i < animatedImg.length; i++){
//   let texture = PIXI.Texture.from(animatedImg[i])
//   textureArr.push(texture)
// }
// let animatedSprite = new PIXI.AnimatedSprite(textureArr);
// animatedSprite.animationSpeed  = 0.3
// animatedSprite.play()
// container.addChild(animatedSprite);
const loader = new PIXI.Loader()
loader
  .add('../img/curcle/curcleSheet.json')
  .load(setup);

    function setup() {
      // get a reference to the sprite sheet we've just loaded:
      let sheet = loader.resources["../img/curcle/curcleSheet.json"];
      let background = new PIXI.Sprite(sheet.textures["1.png"]);
      app.stage.addChild(background);
  }

container.addChild(player);

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




// app.loader.add('man', './')
// app.loader.load(manLoad)
// let whiteManBaseTexture = new PIXI.BaseTexture('./img/pngegg.png')
// let whiteManTextueMassive = [
//   new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(30,30,30,30)),
//   new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(20,30,30,30)),
//   new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(30,30,30,30))
// ]
// let whiteManTextue = new PIXI.Texture(whiteManBaseTexture,new PIXI.Rectangle(60,60,50,50))
// let whiteMan = new PIXI.AnimatedSprite(whiteManTextueMassive)
// whiteMan.x = 200
// whiteMan.y = 50
// whiteMan.width = 30
// whiteMan.height = 30

// whiteMan.play()