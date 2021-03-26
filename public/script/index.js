

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: 1
  });
document.body.appendChild(app.view)


let game = new PIXI.Container();
app.stage.addChild(game)



let player = new PIXI.Graphics();
player.lineStyle(2, 0x00ff00, 1);
player.drawRect(110, 110, 30, 30);
player.endFill();




app.stage.addChild(player)



