const loader = new PIXI.Loader();
function bla(){console.log('bla')}
loader.add(
        
        ('spider1','../img/cosmospider/3.png'),
        ('spider2','../img/cosmospider/4.png')
        // ('../img/cosmospider/5.png'),
        // ('../img/cosmospider/6.png'),
        // ('../img/cosmospider/7.png'),

)

loader.load(()=>{console.log('bla')})


// spiderTexture = [
//     PIXI.Texture.from('../img/cosmospider/3.png'),
//     PIXI.Texture.from('../img/cosmospider/4.png'),
//     PIXI.Texture.from('../img/cosmospider/5.png'),
//     PIXI.Texture.from('../img/cosmospider/6.png'),
//     PIXI.Texture.from('../img/cosmospider/7.png'),
// ]


// let spider = new PIXI.AnimatedSprite(spiderTexture);
// spider.width = 50
// spider.width = 50
// spider.x = 400
// spider.y = 100
// spider.animationSpeed  = 0.2

  