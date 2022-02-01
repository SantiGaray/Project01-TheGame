console.log("js obs loaded")

class Obstacles{
    constructor(ctx){
        this.ctx = ctx;
        this.scrapObstacles = [];
    }

    init(){
        this.scrapObstacles = []
    }

    move(frameNumber) {
        if(frameNumber < 20 ) return 
        if(frameNumber % 50 === 0){
            const scrapPos = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) +100)

            this.scrapObstacles.push(this.getScrap(scrapPos))
          }


          this.scrapObstacles.forEach(scrap => scrap.x += scrap.vx)
    }

    getScrap(){
    const newScrap = {
      img: new Image(),

      width: 50,
      height: 50,
      x: this.ctx.canvas.width + (Math.floor(Math.random()* 200)-50),
      y: this.ctx.canvas.height - 150,
      vx: -5,
      vy: 0
    }

    newScrap.img.src = "/images/scrapmetal.png"

    return newScrap
    }

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



