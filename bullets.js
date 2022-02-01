console.log("js bullets loaded")

class Bullets{
    constructor(ctx) {
        this.ctx = ctx;
        this.bullets = [];    

    }


    init(){
        this.bullets = [];
    }

    move(frameNumber){
        this.bullets.forEach((bullet) => {bullet.x += bullet.vx} )
    }

    

    shootBullet(){

    let newBullet = {
        img: new Image(),

        width: 30,
        height: 30,
        x: this.player.x,
        y: this.player.y + 3,
        vx: 7,
        vy: 0,
    }
    newBullet.img.src = "/images/waterbullet.png"


    
    this.bullets.theBullet(this.player)

    return newBullet
    }

    theBullet(player){
        this.bullets.push(player)
        console.log( "this.bullets",this.bullets)
    }


    draw(){
        this.bullets.forEach((bullet) => {
            this.ctx.drawImage(
                bullet.img,
                bullet.x,
                bullet.y,
                bullet.width,
                bullet.height,
            )
        })
    }

}
