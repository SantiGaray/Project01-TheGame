//------Load Check------
console.log("js player loaded")

class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 100;
        this.height = 174;
        

        this.x = 0;
        this.y = 0 ;
        
        this.vy = 0;
        this.accy = 1;

        this.img = new Image();
        this.img.src = "images/player.png";

        this.spriteColumns = 6;
        this.spriteRows = 1;

        this.spriteCol = 0;
        this.spriteRow = 0;
        this.spriteX = 0;
        this.spriteY = 0;
    }

    init(){
        this.x = 50;
        this.y = 370;
        this.vy = 0;
        this.spriteCol = 0;
        this.spriteRow = 0;
        this.spriteX = 0;
        this.spriteY = 0;       
    }


    move(){
        this.vy += this.accy
        this.y += this.vy
        if (this.y > 370) this.y = 370
        if (this.y < 50) this.y = 50
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
    

    jump(){
        this.vy = -20
    }



    draw(frameNumber){
        this.setSpriteFrame(frameNumber);
        this.ctx.drawImage(
            this.img,
            this.spriteX,
            this.spriteY,
            this.width,
            this.height, 
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }


    collidesWith(scrap) {
        
        return (this.x < scrap.x + scrap.width &&
            this.x + this.width >= scrap.x &&
            this.y < scrap.y + scrap.height &&
            this.y + this.height > scrap.y)


    }

    

}
