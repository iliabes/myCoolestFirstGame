


let app = new PIXI.Application({
    width:500,
    height:500,
    antialias: true,
    resolution: 1 
})
app.renderer.resize(innerWidth, 500);
document.body.appendChild(app.view)


let player = new PIXI.Sprite.from('../img/player.bmp')
player.x = app.view.width / 2 ;
player.y = app.view.height / 2;
player.anchor.set(0.5);

let camera = {
  x:0,
  y:0
}
console.log(camera.x)
// let player = new PIXI.Graphics()
// player.x = 100;
// player.y = 100;
// app.stage.addChild(player)
// player.lineStyle(10,0x00ff00)
// player.beginFill('green')
// player.beginFill('red')
// player.drawCircle(100,100,50)
// player.endFill()

let point = new PIXI.Sprite.from('../img/pont.png')
point.x = camera.x + 500;
point.y = camera.y + 200;
point.width = 30;
point.height = 30;
point.anchor.set(0.5);

let wall = new PIXI.Sprite.from('../img/wall.bmp')
wall.x = camera.x+0;
wall.y = camera.y+0;
wall.height = 30;
wall.anchor.set(0.5);

app.stage.addChild(player,point,wall)



function collader(object,player,action){
  let playerWidth =  player.width
  let playerHeight =  player.height
    console.log((object.x+object.width/2),(player.x + playerWidth/2))
     if((player.x + playerWidth/2) >= (object.x - object.width/2) && (player.x - playerWidth/2) <= (object.x+object.width/2) &&(player.y - player.height/2 <=object.y + object.height/2  ) && (player.y + player.height/2 >=object.y - object.height/2  )   ){
       console.log('collaid')
       point.destroy()
     }

    }




window.addEventListener('keydown',()=>{collader(player,point)})

