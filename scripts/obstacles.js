//------Load Check------
console.log("js obs loaded")

class Obstacles{
    constructor(ctx,player){
        this.ctx = ctx;
        this.scrapObstacles = [];
        this.player = player;
        this.width = 200;
        this.height = 70;

        
    }

    init(){
        this.scrapObstacles = []
    }

    move(frameNumber) {
        if(frameNumber < 20 ) return 
        if(frameNumber % 240 === 0){
            const scrapPos = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) +100)

            this.scrapObstacles.push(this.getScrap(scrapPos))
          }


          this.scrapObstacles.forEach(scrap => scrap.x += scrap.vx)
    }

    getScrap(){
    const newScrap = {
      img: new Image(),

      width: this.width,
      height: this.height,
      x: this.ctx.canvas.width + (Math.floor(Math.random()* 200)-50),
      y: this.ctx.canvas.height - 150,
      vx: -5,
      vy: 0
    }

    newScrap.img.src = "images/scrapmetal.png"

    return newScrap
    }


    // checkPlatform(obstacle){
    // if(this.player.y + this.player.height <= this.obstacle.y && this.player.y + this.player.height + this.player.y >= this.obstacle.y && this.player.x + this.player.width >= this.obstacle.x && this.player.x <= this.obstacle.x + this.width){ 
    //     this.player.vy = 0
    //     this.player.accy = 0
    //     console.log('a')
    // }
    // }

    draw(frameNumber) {
        this.scrapObstacles.forEach((scrap) => {
            
            this.ctx.drawImage(

                scrap.img,
                scrap.x,
                scrap.y,
                scrap.width,
                scrap.height,
             )
        
            })
    
        }

      

}



