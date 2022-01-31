
console.log("js player loaded")
class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 170;
        this.height = 50;

        this.x = 0;
        this.y = 0;
        
        this.vy = 0;
        this.accy = 1;

        this.img = new Image();
        this.img.src = "images/player.png";
    }

    init(){
        this.x = 50;
        this.y = 400;
        this.vy = 0;
    }


    move(){
        this.vy += this.accy
        this.y += this.vy
        if (this.y > 400) this.y = 400
        if (this.y < 50) this.y = 50
    }

    jump(){
        this.vy = -15
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}
