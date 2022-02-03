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


//------Get Buttons------
const startButton =  document.getElementById("start-btn")
const optionsButton = document.getElementById("menu")



//------Listeners------
  startButton.onclick = ()=> {
    startButton.textContent = "PLAY AGAIN"
    startButton.blur();
    game.start();
    gameSoundIntro.play();
    startButton.style.display="none"
    optionsButton.style.display="none"
    
  };

  let retryButton = document.querySelector("#retry-btn")
        
        retryButton.onclick = () =>{
            retryButton.classList.add("hidden")
            location.reload()
        }

  
