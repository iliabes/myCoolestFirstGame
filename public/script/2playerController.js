let key = {
  left:false,
  right:false,
  up:false,
  down:false
}

function downKey(e){
    switch (e.key) {
        case 'a':
            key.left = true;
          break;
        case 'd':
            key.right = true;
          break;
        case 's':
            key.down = true;
          break;
        case 'w':
            key.up = true;
          break;
      }

}


function upKey(e){
    switch (e.key) {
        case 'a':
          key.left = false;
          player.stop()
          break;
        case 'd':
            key.right = false;
            player.stop()
          break;
        case 's':
            key.down = false;
            player.stop()
          break;
        case 'w':
            key.up = false
            player.stop()
          break;
      }

}

function move(){
  if(key.up){
    player.rotation = 0
      player.y = player.y - 5;
      player.play()
  }

  if(key.left){
    player.x = player.x - 5;
    player.rotation = 4.7;
    player.play()
}
  if(key.down){
      player.rotation = 3.1
      player.y = player.y + 5;
      player.play()
  }
    if(key.right){
        player.x = player.x + 5;
        player.rotation = 1.6;
        player.play()
    }

    if(key.up && key.right){
      player.rotation = 1;
    }
    if(key.right && key.down){
      player.rotation = 2.2;
    }
    if(key.down && key.left){
      player.rotation = 4;
    }
    if(key.left && key.up){
      player.rotation = 5.3;
    }
}

window.addEventListener('keydown',downKey)
window.addEventListener('keyup',upKey)
app.ticker.add(delta => move(delta));