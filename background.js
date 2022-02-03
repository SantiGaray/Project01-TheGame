//------Load Check------
console.log("js back loaded")

class Background {
    constructor(ctx){
        this.ctx = ctx;
    

        this.background1 = {
                img: new Image(),
                width: this.ctx.canvas.width,
                height: this.ctx.canvas.height,
                x: 0,
                y: 0,
                vx: -4,
                vy: 0,
        };

        this.background1.img.src = "images/background1.png";
        
        this.background2 = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -2.5,
            vy: 0,
        };

        this.background2.img.src = "images/background2.png";
    
        this.background3 = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -1.5,
            vy: 0,
        };
        this.background3.img.src = "images/background3.png";

        this.background4 = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -.7,
            vy: 0,
        };
        this.background4.img.src = "images/background4.png";
    }

    init() {
        
        this.frameNumber = 0
        this.background4.x = 0;
        this.background4.y = 0;
        this.background3.x = 0;
        this.background3.y = 0;
        this.background2.x = 0;
        this.background2.y = 0;
        this.background1.x = 0;
        this.background1.y = 0
    };

    move(frameNumber){
        this.background1.x += this.background1.vx;
        this.background2.x += this.background2.vx;
        this.background3.x += this.background3.vx;
        this.background4.x += this.background4.vx


        if (this.background1.x + this.background1.width <= 0)
        this.background1.x = 0;
        if (this.background2.x + this.background2.width <= 0)
        this.background2.x = 0;
        if (this.background3.x + this.background3.width <= 0)
        this.background3.x = 0;
      if (this.background4.x + this.background4.width <= 0)
        this.background4.x = 0;
    }

    draw(frameNumber) {
        this.ctx.drawImage(
            this.background4.img,
            this.background4.x,
            this.background4.y,
            this.background4.width,
            this.background4.height
        );
        this.ctx.drawImage(
            this.background4.img,
            this.background4.x + this.background4.width,
            this.background4.y,
            this.background4.width,
            this.background4.height
        );
        
        this.ctx.drawImage(
            this.background3.img,
            this.background3.x,
            this.background3.y,
            this.background3.width,
            this.background3.height
        );
        this.ctx.drawImage(
            this.background3.img,
            this.background3.x + this.background3.width,
            this.background3.y,
            this.background3.width,
            this.background3.height
        );

        this.ctx.drawImage(
            this.background2.img,
            this.background2.x,
            this.background2.y,
            this.background2.width,
            this.background2.height
        );
        this.ctx.drawImage(
            this.background2.img,
            this.background2.x + this.background2.width,
            this.background2.y,
            this.background2.width,
            this.background2.height
        );

        this.ctx.drawImage(
            this.background1.img,
            this.background1.x,
            this.background1.y,
            this.background1.width,
            this.background1.height
        );
        this.ctx.drawImage(
            this.background1.img,
            this.background1.x + this.background1.width,
            this.background1.y,
            this.background1.width,
            this.background1.height
        );
    }

}