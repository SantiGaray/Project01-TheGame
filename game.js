console.log("js game loaded")

class Game{

    constructor(ctx, player, background, obstacles, bullets){
        this.ctx= ctx;
        this.player = player;
        this.bullets = bullets;
        this.background = background;
        this.obstacles = obstacles;
        this.frameNumber = 0
        
        document.addEventListener("keydown", (event) => {
            if(event.code === "Space"){
                this.player.jump();}
          });

        document.addEventListener("keydown", (event) => {
            if(event.key === "a"){
                console.log("a")
            this.shootBullets()}
        })

    }


start(){
    this.init()
    this.play()

}

init(){

    if (this.frameNumber) this.stop();
    this.frameNumber = 0;
    this.player.init();
    this.bullets.init();
    this.background.init();
    this.obstacles.init();
    
    
}

play(){
    this.move();
    this.draw();
    if (this.checkForCollisions()) this.gameOver();
    if (this.frameNumber !== null) {
      this.frameNumber = requestAnimationFrame(this.play.bind(this));
    }
}

stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
}

move(){
    
    this.bullets.move(this.frameNumber)
    this.background.move(this.frameNumber)
    this.obstacles.move(this.frameNumber)
    this.player.move(this.frameNumber)
    
}

draw(){
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.bullets.draw();
    this.background.draw(this.frameNumber);
    this.obstacles.draw(this.frameNumber);
    this.player.draw(this.frameNumber);
    
}

 checkForCollisions(){

    let collision =  false;

    if (this.obstacles.scrapObstacles.some((scrap) => this.player.collidesWith(scrap)))  
        {
        collision = true;
        }
        
        return collision

 }

 gameOver() {
    this.stop();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 32px sans-serif";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
    
  }


 }