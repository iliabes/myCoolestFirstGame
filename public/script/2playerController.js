let key = {}
key.left = false;
key.right = false;
key.up = false;
key.down = false;
function downKey(e){
    switch (e.key) {
        case 'a':
            key.left = true;
            
          break;
        case 'd':
            key.right = true;
          break;
        case 's':
            key.up = true;
          break;
        case 'w':
            key.down = true;
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
            key.up = false;
            player.stop()
          break;
        case 'w':
            key.down = false
            player.stop()
          break;
      }

}

function move(){
    if(key.left){
        player.x = player.x - 5;
        player.rotation = 4.7;
        player.play()
    }
    if(key.right){
        player.x = player.x + 5;
        player.rotation = 1.6;
        player.play()
    }
    if(key.up){
      player.rotation = 3.1
        player.y = player.y + 5;
        player.play()
        
    }
    if(key.down){
        player.rotation = 0
        player.y = player.y - 5;
        player.play()
    }
}

window.addEventListener('keydown',downKey)
window.addEventListener('keyup',upKey)
app.ticker.add(delta => move(delta));