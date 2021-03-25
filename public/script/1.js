//bg
let color = '0X0c541f';
for(let i = 0 ; i <= 11;i++ ){
  for(let z = 0 ; z <= 9;z++ ){

  let contCross = new PIXI.Container()
  contCross.x = 100 * i;
  contCross.y = 100 * z;

  let crossHorizont = new PIXI.Graphics();
  crossHorizont.lineStyle(1, color, 1)
  crossHorizont.moveTo(0 ,25);
  crossHorizont.lineTo(50, 25);


  let crossVert = new PIXI.Graphics();
  crossVert.lineStyle(1, color, 1)
  crossVert.moveTo(25, 0);
  crossVert.lineTo(25, 50);

  contCross.addChild(crossHorizont,crossVert)
  app.stage.addChild(contCross)
  }
}