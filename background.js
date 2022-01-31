console.log("js back loaded")
class Background {
    constructor(ctx){
        this.ctx = ctx;
    

        this.backgroundFront = {
                img: new Image(),
                width: this.ctx.canvas.width,
                height: 100,
                x: 0,
                y: this.ctx.canvas.height - 100,
                vx: -5,
                vy: 0,
        };

        this.backgroundFront.img.src = "images/backgroundfront.jpeg";
        
        this.backgroundFar = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -2,
            vy: 0,
        };
        this.backgroundFar.img.src = "images/backgroundfar.png";
    }

    init() {
        
        this.frameNumber = 0
        this.backgroundFar.x = 0;
        this.backgroundFar.y = 0;
        this.backgroundFront.x = 0;
        this.backgroundFront.y = this.ctx.canvas.height - 100
    };

    move(frameNumber){
        this.backgroundFront.x += this.backgroundFront.vx;
        this.backgroundFar.x += this.backgroundFar.vx


        if (this.backgroundFront.x + this.backgroundFront.width <= 0)
        this.backgroundFront.x = 0;
      if (this.backgroundFar.x + this.backgroundFar.width <= 0)
        this.backgroundFar.x = 0;
    }

    draw(frameNumber) {
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        );
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x + this.backgroundFar.width,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        );

        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        );
        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x + this.backgroundFront.width,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        );
    }

}