//------Load Check------
console.log("js game loaded")

class Game{

    constructor(ctx, player, background, foes, obstacles, projectiles){
        this.ctx= ctx;
        this.player = player;
        this.background = background;
        this.foes = foes;
        this.obstacles = obstacles;
        this.frameNumber = null;
        this.projectiles = projectiles;
        this.score = 0
        
        
        document.addEventListener("keydown", (event) => {
            if (event.repeat) return;
            if(event.code === "Space"){
                this.player.jump();}
          });

        document.addEventListener("keydown", (event) => {
            if(event.key === "a"){
            this.projectiles.shootBullet(this.player)}
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
    this.background.init();
    this.obstacles.init();
    this.foes.init();
    this.projectiles.init();  
}

play(){

    this.move();
    this.draw();
    this.eraseFoes();
    this.obstacles.check

    

    if (this.checkForCollisions()) this.gameOver();
    if (this.frameNumber !== null) {
      this.frameNumber = requestAnimationFrame(this.play.bind(this));
    }
}

stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
    gameSoundIntro.pause();
    gameSoundGameOver.play()

}

move(){
    this.background.move(this.frameNumber)
    this.obstacles.move(this.frameNumber)
    this.player.move(this.frameNumber)
    this.foes.move(this.frameNumber)
    this.projectiles.move(this.frameNumber) 
    this.obstacles.scrapObstacles.forEach(obstacle=> this.checkPlatform(obstacle));

}

// checkPlatform(){
//     if(this.player.y + this.player.height <= this.obstacles.y && this.player.y + this.player.height + player.velocity.y >= this.obstacles.y && this.player.x + this.player.width >= this.obstacles.x && this.player.x <= this.obstacles.x + this.obstacles.width){ 
//         this.player.vy = 0
//         this.player.accy = 0
//         console.log('a')
//     }
// }

    
checkForCollisions(){

    let collision =  false;

    // if (this.obstacles.scrapObstacles.some((scrap) => this.player.collidesWith(scrap)))  
    //     {
    //     collision = true;
    //     }
   
    if (this.foes.wheels.some((wheel) => this.player.collidesWith(wheel)))
        {
        collision = true;
        }
        
        return collision
}

 checkPlatform(obstacle){
     console.log("obstacleX",obstacle.x+ obstacle.width)
     console.log("playerX",this.player.vy + this.player.width)

    if(this.player.y + this.player.height <= obstacle.y && this.player.y + this.player.height + this.player.vy >= obstacle.y  /*&& this.player.x <= obstacle.x + obstacle.width*/){
        this.player.accy = 0
        this.player.vy = 0
        
    
        console.log('a')
    }
    if(   this.player.x + this.player.width > obstacle.x  + obstacle.width){
        this.player.accy = 1
    }    if(   this.player.x + this.player.width < obstacle.x  ){
        this.player.accy = 1
    }
 
    }



eraseFoes() {
    


    this.foes.wheels.forEach((wheel, indexWheel)=>{

        this.projectiles.bullets.forEach((bullet, indexBullet) => {

            if(bullet.x > this.ctx.canvas.width) this.projectiles.bullets.splice(indexBullet, 1)
            if(wheel.x < -500) this.foes.wheels.splice(indexWheel, 1) 
                


            if(this.projectiles.collidesWith(bullet, wheel)) {
                            this.foes.wheels.splice(indexWheel,1)
                            this.projectiles.bullets.splice(indexBullet,1)
                            this.score++
                        }
                   })
                })    
}
              
            
 draw(){
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.background.draw(this.frameNumber);
    this.obstacles.draw(this.frameNumber);
    this.foes.draw(this.frameNumber);
    this.player.draw(this.frameNumber);
    this.projectiles.draw(this.frameNumber); 
    this.drawScore();
}




drawScore() {
    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.font = " bold 24px sans-serif";
    this.ctx.fillText(`Score: ${this.score} pts`, 20, 40);
    this.ctx.restore();
  }

 gameOver() {
    this.stop();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 32px sans-serif";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
    
    let retryButton = document.querySelector("#retry-btn")
    retryButton.classList.toggle("hidden")
    
    
  }
 retry(){
    
 }

}