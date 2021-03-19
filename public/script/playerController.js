 function control(e){
    switch (e.key) {
        case 'a':
          player.x = player.x - 5;
          break;
        case 'd':
          player.x = player.x + 5;
          break;
        case 's':
          player.y = player.y + 5;
          break;
        case 'w':
          player.y = player.y - 5;
          break;
        default:
          alert( "Нет таких значений" );
      }

}

export const a = 0

