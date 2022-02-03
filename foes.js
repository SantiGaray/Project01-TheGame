//------Load Check------
console.log("js wheels loaded")

class Foes {
    constructor(){
        this.ctx = ctx;
        this.wheels = [];
        this.width = 112,5;
        this.height = 120;

        this.y = 0
        this.vy = 0

        this.spriteColumns = 16;
        this.spriteRows = 0;

        this.spriteCol = 0;
        this.spriteRow = 0;
        this.spriteX = 0;
        this.spriteY = 0;
    }

    init(){
        this.wheels = [];
        this.y = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) +100)
        this.vy = 0;
        this.spriteCol = 0;
        this.spriteRow = 0;
        this.spriteX = 0;
        this.spriteY = 0;

    }


    move(frameNumber){
        if (frameNumber < 20) return;
        if (frameNumber % 150 === 0){
            const wheelsPos = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) +100)
            this.wheels.push(this.getWheel(wheelsPos))
        }

        this.wheels.forEach(wheel => wheel.x += wheel.vx)
    }

    setSpriteFrame(frameNumber){

        if(frameNumber % 40 === 0){
            this.spriteCol += 1;

            if(this.spriteCol >= this.spriteColumns) {
                this.spriteCol = 0;
            }

            this.spriteX = (this.width * this.spriteCol);
            this.spriteY = (this.height * this.spriteRow);
        }
    }

    getWheel(){
        const newWheel = {
          img: new Image(),
    
          width: 112.5,
          height: 120,
          x: this.ctx.canvas.width + (Math.floor(Math.random()* 200)-50),
          y: 200,
          vx: -5,
          vy: 0
        }
    
        newWheel.img.src = "/images/firewheel.png"
    
        return newWheel

    }
    
    draw(frameNumber) {
        this.wheels.forEach((wheel) => {
                this.ctx.drawImage(
                    wheel.img,
                    this.spriteX,
                this.spriteY,
                this.width,
                this.height,
                    wheel.x,
                    wheel.y,
                    wheel.width,
                    wheel.height,
                 )
            
                })
        
    }

    

    
}    
        


