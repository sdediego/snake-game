// Define GameArea Object constants
var GAME_AREA_WIDTH = 0.95 * window.innerWidth;
var GAME_AREA_HEIGHT = 0.95 * window.innerHeight;
var GAME_AREA_STYLE = '#00f';
// Define PlayGround Object constants
var PLAYGROUND_ROWS = 20;
var PLAYGROUND_COLUMNS = 25;
var PLAYGROUND_CELL_SIZE = GAME_AREA_HEIGHT / PLAYGROUND_ROWS;
var PLAYGROUND_WIDTH = PLAYGROUND_COLUMNS * PLAYGROUND_CELL_SIZE;
var PLAYGROUND_HEIGHT = PLAYGROUND_ROWS * PLAYGROUND_CELL_SIZE;
var PLAYGROUND_GRID_STYLE = '#000';
var PLAYGROUND_IMAGE_SRC = './images/board/playground.jpg';
// Define ScoreBoard Object constants
var SCOREBOARD_WIDTH = parseInt((GAME_AREA_WIDTH - PLAYGROUND_WIDTH) / 2);
var SCOREBOARD_HEIGHT = PLAYGROUND_HEIGHT;
// Define background image path
var BACKGROUND_IMAGE_SRC = './images/board/background.jpg';
// Define scoreboard init and context
var SCOREBOARD_INIT_POINTS = 0;
var SCOREBOARD_INIT_STATE = 'cool';
var SCOREBOARD_CONTEXT_STYLE = '#000';
var TEXT_CONTEXT_STYLE = '#fff';
var TEXT_CONTEXT_FONT = '20px serif';
// Define canvas update interval
var INTERVAL_UPDATE_TIME = 100;


// GameArea constructor function
function GameArea() {
    this.canvas = document.getElementById('snake-game');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = GAME_AREA_WIDTH;
    this.canvas.height = GAME_AREA_HEIGHT;
    this.image = new Image();
}

GameArea.prototype.setBackgroundImage = function() {
    // Borrar estas dos lineas al definir el fondo
    this.context.fillStyle = GAME_AREA_STYLE;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height );
    // Definir la imagen de fondo
    this.image.src = BACKGROUND_IMAGE_SRC;
    this.image.onload = function() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }.bind(this);
};

GameArea.prototype.update = function(playGround, scoreBoard) {
    this.setBackgroundImage();
    scoreBoard.setScoreBoard(this, playGround);
    //playGround.setPlayGroundImage(this);
    playGround.setPlayGroundGrid();
    playGround.drawGrid(this);
};

GameArea.prototype.init = function(playGround, scoreBoard, updateFunction) {
    this.update(playGround, scoreBoard);
    this.interval = setInterval(updateFunction, INTERVAL_UPDATE_TIME);
};

GameArea.prototype.stop = function() {
    clearInterval(this.interval);
};

GameArea.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


// PlayGround constructor function
function PlayGround() {
    this.x = SCOREBOARD_WIDTH;
    this.y = 0;
    this.width = PLAYGROUND_WIDTH;
    this.height = PLAYGROUND_HEIGHT;
    this.rows = PLAYGROUND_ROWS;
    this.columns = PLAYGROUND_COLUMNS;
    this.cellSize = PLAYGROUND_CELL_SIZE;
    this.grid = this.setPlayGroundGrid();
    this.image = new Image();
}

PlayGround.prototype.setPlayGroundGrid = function() {
    var twoDimensionalGrid  = new Array(this.rows);
    for (var i = 0; i < twoDimensionalGrid.length; i++) {
        twoDimensionalGrid[i] = new Array(this.columns).fill(0);
        //console.log(twoDimensionalGrid[i]);
    }
    return twoDimensionalGrid;
};

PlayGround.prototype.drawGrid = function(gameArea) {
    gameArea.context.fillStyle = '#fff';
    gameArea.context.fillRect(this.x, this.y, this.width, this.height );
    for (var x = this.x; x <= this.x + this.width; x += this.cellSize) {
        gameArea.context.moveTo(x, 0);
        gameArea.context.lineTo(x, this.height);
    }
    for (var y = 0; y <= this.height; y += this.cellSize) {
        gameArea.context.moveTo(this.x, y);
        gameArea.context.lineTo(this.x + this.width, y);
    }
    gameArea.context.strokeStyle = PLAYGROUND_GRID_STYLE;
    gameArea.context.stroke();
};

PlayGround.prototype.setPlayGroundImage = function(gameArea) {
    //var image = new Image();
    this.image.src = PLAYGROUND_IMAGE_SRC;
    this.image.onload = function() {
        gameArea.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }.bind(this);
};


// ScoreBoard constructor function
function ScoreBoard(playGround, points, state) {
    this.x = playGround.x + playGround.width;
    this.y = 0;
    this.width = SCOREBOARD_WIDTH;
    this.height = SCOREBOARD_HEIGHT;
    this.points = points ? points : SCOREBOARD_INIT_POINTS;
    this.state = state ? state : SCOREBOARD_INIT_STATE;
}

ScoreBoard.prototype.setScoreBoard = function(gameArea, playGround) {
    // Set scoreboard context
    gameArea.context.fillStyle = SCOREBOARD_CONTEXT_STYLE;
    gameArea.context.fillRect(playGround.width, 0, this.width, this.height);
    // Set text context
    gameArea.context.font = TEXT_CONTEXT_FONT;
    gameArea.context.fillStyle = TEXT_CONTEXT_STYLE;
    // Ajustar marcador
    gameArea.context.fillText('Score: ' + this.points, this.x + 50, this.height/5, this.width);
    gameArea.context.fillText('State: ' + this.state, this.x + 50, this.height/4, this.width);
    //gameArea.context.strokeText('Score: ' + this.points, this.x, this.height/5, this.width);
    //gameArea.context.strokeText('State: ' + this.state, this.x, this.height/4, this.width);
};
