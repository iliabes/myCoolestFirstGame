let app = new PIXI.Application({
    width: window.innerWidth,
    height: 250,
    antialias: true,
    resolution: 1
  });
document.body.appendChild(app.view)


let game = new PIXI.Container();
app.stage.addChild(game)
// game.addChild(spider);
// spider.play()

