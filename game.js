console.log("js game loaded")

class Game{

    constructor(ctx, player, background, obstacles){
        this.ctx= ctx;
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = 0
        
        document.addEventListener("keydown", (event) => {
            if(event.code === "Space"){
                this.player.jump();}
          });
    }


start(){
    this.init()
    this.play()

}

init(){
    
    this.frameNumber = 0
    this.background.init()
    this.player.init()


}

play(){
    this.move();
    this.draw()
    this.frameNumber = requestAnimationFrame(this.play.bind(this))
}

stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
  }

  move(){
    
    this.background.move(this.frameNumber)
    this.player.move(this.frameNumber)
}

draw(){
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.background.draw(this.frameNumber);
    this.player.draw(this.frameNumber);
}

}