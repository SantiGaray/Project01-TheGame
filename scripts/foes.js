//------Load Check------
console.log("js wheels loaded")

class Foes {
    constructor(){
        this.ctx = ctx;
        this.wheels = [];
        this.width = 50;
        this.height = 58;

        this.y = 0;
        this.vy = 0;
        this.vx = -5;

        this.spriteColumns = 12;
        this.spriteRows = 1;

        this.spriteCol = 0;
        this.spriteRow = 0;
        this.spriteX = 0;
        this.spriteY = 0;
        this.img = new Image();
        this.img.src = "images/firewheel.png"

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
        console.log(this.wheels);
        if (frameNumber < 20) return; // to delay the creation
        if (frameNumber % 110 === 0){ 
            const wheelsPos = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) +100)
            this.wheels.push(this.getWheel(wheelsPos))
        }

        this.wheels.forEach(wheel => wheel.x += wheel.vx)
    }

    setSpriteFrame(frameNumber){
        

        if(frameNumber % 10 === 0){
            this.spriteCol += 1;

            if(this.spriteCol >= this.spriteColumns) {
                this.spriteCol = 0;
            }

            this.spriteX = (this.width * this.spriteCol);
            this.spriteY = (this.height * this.spriteRow);
        }
    }

    getWheel(){
        let newWheel = {
          //img: new Image(),
    
          width: this.width,
          height: this.height,
          x: this.ctx.canvas.width + (Math.floor(Math.random())* 200),
          y: 100 + (Math.floor(Math.random() * 200)),
          vx: this.vx,
          vy: this.vy
        }
    
        //newWheel.img.src = "images/firewheel.png"
    
        return newWheel

    }
    
    draw(frameNumber) {
        this.setSpriteFrame(frameNumber)


        //this.wheels.forEach((wheel) => {

        if(this.wheels.length != 0){
            for(let i = 0; i < this.wheels.length; i++) {
                
                this.ctx.drawImage(
                    this.img,
                    112.5* this.spriteCol,
                    0,
                    112.5,
                    119,
                    this.wheels[i].x,
                    this.wheels[i].y,
                    this.width,
                    this.height,
                 )
                }
            }
            
               // })
        
    }

    

    
}    
        


