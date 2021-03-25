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
          break;
        case 'd':
            key.right = false;
          break;
        case 's':
            key.up = false;
          break;
        case 'w':
            key.down = false
          break;
      }

}

function move(){
    console.log(key.left,key.right,key.down,key.up)
    if(key.left){
        player.x = player.x - 5;
    }
    if(key.right){
        player.x = player.x + 5;
    }
    if(key.up){
        player.y = player.y + 5;
    }
    if(key.down){
        player.y = player.y - 5;
    }
}

window.addEventListener('keydown',downKey)
window.addEventListener('keyup',upKey)
app.ticker.add(delta => move(delta));