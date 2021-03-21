
let app = new PIXI.Application({
    width: 500,
    height: 200,
    antialias: true,
    resolution: 1,
    backgroundColor:0x010056 
  });
  app.renderer.resize(innerWidth, 500);
  
  
  var container = new PIXI.Container();
  app.stage.addChild(container);
  document.body.appendChild(app.view);
  
  // let player = new PIXI.Sprite.from('../img/player.bmp')
  // player.x = app.view.width / 2 ;
  // player.y = app.view.height / 2;
  // player.width = 30;
  // player.height = 30;
  // player.anchor.set(0.5);
  
  
  //-----------1f method
  // let animatedImg = ['../img/curcle/1.png','../img/curcle/2.png','../img/curcle/3.png','../img/curcle/4.png','../img/curcle/5.png','../img/curcle/6.png','../img/curcle/7.png','../img/curcle/8.png']
  massImage = [
    PIXI.Texture.from('../img/cosmospider/3.png'),
    PIXI.Texture.from('../img/cosmospider/4.png'),
    PIXI.Texture.from('../img/cosmospider/5.png'),
    PIXI.Texture.from('../img/cosmospider/6.png'),
    PIXI.Texture.from('../img/cosmospider/7.png'),
  ]
  // let textureArr = []
  // for(let i = 0; i < animatedImg.length; i++){
  //   let texture = PIXI.Texture.from(animatedImg[i])
  //   textureArr.push(texture)
  // }
  // let animatedSprite = new PIXI.AnimatedSprite(massImage);
  // animatedSprite.animationSpeed  = 0.3
  // animatedSprite.play()
  // container.addChild(animatedSprite);
  
  //-----------2 method
  // const loader = new PIXI.Loader()
  // loader
  //   .add('../img/curcle/curcleSheet.json')
  //   .load(setup);
  
  //     function setup() {
  //       // get a reference to the sprite sheet we've just loaded:
  //       let sheet = loader.resources["../img/curcle/curcleSheet.json"];
  //       let background = new PIXI.Sprite(sheet.textures["1.png"]);
  //       app.stage.addChild(background);
  //   }
  
  let base = new PIXI.BaseTexture('../img/curcle//curcleSheet.png')
  
  let superMassWitchTexture = [
    new PIXI.Texture(base,  new PIXI.Rectangle(0,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(30,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(60,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(90,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(120,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(150,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(180,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(210,0,30,30)),
  ]
  
  let superMassWitchTexture2 = [
    new PIXI.Texture(base,  new PIXI.Rectangle(210,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(180,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(150,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(120,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(90,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(60,0,30,30)),
    new PIXI.Texture(base,  new PIXI.Rectangle(30,0,30,30)),
  ]
  
  
  let player = new PIXI.AnimatedSprite(superMassWitchTexture2)
  player._textures = superMassWitchTexture
  player.animationSpeed  = 0.3
  player.loop = true
  player.onComplete = stopPlayer
  
  function stopPlayer(){
    player.stop()
  }
  
  console.log(player)
  
  
  
  
  
  
  
  
  
  let massOnKey = {
    "a":false,
    "w":false,
    "d":false,
    "s":false
  }
  
  function movePlayer(e) {
    switch (e.key) {
      case "a":
        massOnKey['a'] = true
        console.log(massOnKey)
        player._textures = superMassWitchTexture2;
  
        player.play()
        player.x = player.x - 15;
        if(massOnKey['w']){
          console.log(massOnKey['w'])
          player.y = player.x + 15;
        }
        reverseX()
        break;
      case "d":
        massOnKey['d'] = true
        console.log(massOnKey)
        player._textures = massImage;
        player.play()
        player.x = player.x + 15;
        reverseX()
        break;
      case "s":
        massOnKey['s'] = true
        player.play()
        player.y = player.y + 15;
        reverseY()
        break;
      case "w":
        massOnKey['w'] = true
        player.play()
        player.y = player.y - 15;
        reverseY()
        if(massOnKey['d']){player.x = player.x + 15;}
        break;
    }
  }
  
  function movePlayerUp(e) {
    switch (e.key) {
      case "a":
        massOnKey['a'] = false
        stopPlayer()
        break;
      case "d":
        massOnKey['d'] = false
        stopPlayer()
        break;
      case "s":
        massOnKey['s'] = false
        stopPlayer()
        break;
      case "w":
        massOnKey['w'] = false
        stopPlayer()
        break;
    }
  }
  
  
  //за экраном
  function reverseX(){
    console.log(player.y,app.view.width)
    if(player.x > app.view.width ){
      console.log('+')
      player.x = -30
    }
    if(player.x < -45 ){
      console.log('-')
      player.x = app.view.width 
    }
  }
  
  
  function reverseY(){
  
    if(player.y > app.view.height + 45 ){
      console.log('+')
      player.y = -30
    }
    if(player.y < -45 ){
      console.log('-')
      player.y = app.view.height + 30
    }
  }
  
  container.addChild(player)
  window.addEventListener("keydown", movePlayer)
  window.addEventListener("keyup", movePlayerUp)
  
  
  
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