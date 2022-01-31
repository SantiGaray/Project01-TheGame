console.log("js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//------Main Character--------
const player = new Player(ctx)
//------Background--------
const background = new Background(ctx)
//------Obstacles--------
const obstacles = new Obstacles(ctx)

const game = new Game(ctx, player, background, obstacles)

const startButton =  document.getElementById("start-btn")
  startButton.onclick = ()=> {
    startButton.textContent = "Play Again"
    startButton.blur();
    game.start();
  };