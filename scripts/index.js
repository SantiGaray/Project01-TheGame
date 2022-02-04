//------Load Check------
console.log("js loaded")

//------Get Canvas------
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//------Audio------
let gameSoundIntro = new Audio('music/startlevel.mp3');
let gameSoundGameOver = new Audio('music/gameover.wav')

//------Classes------
const player = new Player(ctx)
const background = new Background(ctx)
const obstacles = new Obstacles(ctx, player)
const foes = new Foes(ctx)
const projectiles = new Projectiles(ctx)
const game = new Game(ctx, player, background, foes, obstacles, projectiles)


//------Get Elements------
const startButton =  document.getElementById("start-btn")
const retryButton = document.getElementById("retry-btn")
const h1 = document.querySelector("h1")
// const optionsButton = document.getElementById("menu")
const introPage = document.getElementById("intro-page")
const gameBoard = document.getElementById("game-board")
console.log(startButton)
console.log(introPage)
console.log(gameBoard)
console.log(retryButton)



//------Listeners------
startButton.onclick = ()=> {
    startButton.blur();
    game.start();
    introPage.classList.toggle("hidden");
    gameBoard.classList.toggle("hidden");
    h1.classList.toggle("hidden");

    canvas.focus();
    gameSoundIntro.play();
    //optionsButton.style.display="none"
    
};

  
retryButton.onclick = () =>{
  retryButton.classList.add("hidden")
  game.start();
  canvas.focus();
  
  this.gameSoundGameOver.pause();
  this.gameSoundIntro.play();
  
}

  
