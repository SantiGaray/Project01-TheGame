//------Load Check------
console.log("js bullets loaded")

class Projectiles{
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

    

    shootBullet(player){

        const newBullet = {
            img: new Image(),

            width: 30,
            height: 20,
            x: player.x + player.width-5,
            y: player.y + player.height/2,
            vx: 7,
            vy: 0,
        }
        
        newBullet.img.src = "images/waterbullet.png"

        return this.bullets.push(newBullet)
    }

    collidesWith(bullet, wheel){ 
        return  (bullet.x <= wheel.x + wheel.width && bullet.x + bullet.width >= wheel.x && bullet.y <= wheel.y + wheel.height && bullet.y + bullet.height >= wheel.y)
    }

    draw(frameNumber){
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
