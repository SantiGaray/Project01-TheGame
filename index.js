console.log("js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//------Main Character--------
const player = new Player(ctx)
//------Background--------
const background = new Background(ctx)
//------Obstacles--------
const obstacles = new Obstacles(ctx)

const bullets = new Bullets(ctx)

const game = new Game(ctx, player, background, obstacles, bullets)

const startButton =  document.getElementById("start-btn")
const optionsButton = document.getElementById("menu")
  startButton.onclick = ()=> {
    //startButton.textContent = "Play Again"
    startButton.blur();
    game.start();
    startButton.style.display="none"
    optionsButton.style.display="none"
  };