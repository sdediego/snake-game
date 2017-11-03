// Define GameArea Object constants
var GAME_AREA_WIDTH = 0.95 * window.innerWidth;
var GAME_AREA_HEIGHT = 0.95 * window.innerHeight;
var GAME_AREA_STYLE = '#fff';
// Define PlayGround Object constants
var PLAYGROUND_ROWS = 15 ;
var PLAYGROUND_COLUMNS = 20;
var PLAYGROUND_CELL_SIZE = parseInt(GAME_AREA_HEIGHT / PLAYGROUND_ROWS);
var PLAYGROUND_WIDTH = PLAYGROUND_COLUMNS * PLAYGROUND_CELL_SIZE;
var PLAYGROUND_HEIGHT = PLAYGROUND_ROWS * PLAYGROUND_CELL_SIZE;
var PLAYGROUND_GRID_STYLE = '#000';
var PLAYGROUND_BORDER_STYLE = '#000';//'#8B4513';
var PLAYGROUND_BORDER_WIDTH = 2;
// Define ScoreBoard Object constants
var SCOREBOARD_WIDTH = parseInt((GAME_AREA_WIDTH - PLAYGROUND_WIDTH) / 2);
var SCOREBOARD_HEIGHT = PLAYGROUND_HEIGHT;
// Define scoreboard init and context
var SCOREBOARD_INIT_POINTS = 0;
var SCOREBOARD_INIT_STATUS = 'cool';
var SCOREBOARD_INIT_SIZE = 5;
var SCOREBOARD_CONTEXT_STYLE = '#000';
var TEXT_CONTEXT_STYLE = '#000';
var TEXT_CONTEXT_FONT = '24px Verdana';
// Define canvas update interval
var INTERVAL_UPDATE_TIME = 50;


// GameArea constructor function
function GameArea() {
    this.canvas = document.getElementById('snake-game');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = GAME_AREA_WIDTH;
    this.canvas.height = GAME_AREA_HEIGHT;
    this.background = new Image();
    this.endGame = new Image();
    this.frames = 0;
}

GameArea.prototype.getImage = function(images) {
    this.background = images.background.BACKGROUND_IMAGE;
    this.endGame = images.gameover.GAME_OVER;
};

GameArea.prototype.setBackgroundImage = function() {
    this.context.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
};

GameArea.prototype.update = function(playGround, scoreBoard) {
    this.setBackgroundImage();
    scoreBoard.setScoreBoard(this);
    playGround.setPlayGroundImage(this);
    playGround.setPlayGroundGrid();
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

GameArea.prototype.dieSnake = function() {
    // Game Over: Give last goodbye to our lovely reptile
    this.context.drawImage(
        this.endGame, SCOREBOARD_WIDTH, 0,
        this.canvas.width/3, this.canvas.height/3
    );
};

GameArea.prototype.setHighestScore = function(scoreboard) {
    var bestScore = localStorage.getItem('highestScore') || 0;
    if (scoreboard.points > bestScore) {
        localStorage.setItem('highestScore', scoreboard.points);
    }
    console.log(bestScore);
    // Set text context
    this.context.font = TEXT_CONTEXT_FONT;
    this.context.fillStyle = TEXT_CONTEXT_STYLE;
    // Ajustar marcador
    this.context.fillText(
        'Your Score: ' + scoreboard.points,
        SCOREBOARD_WIDTH + PLAYGROUND_WIDTH/3, this.height/3, this.width
    );
    this.context.fillText(
        'Highest Score: ' + bestScore,
        this.x + 20, this.height/2, this.width
    );
    console.log('pintado');
};


// PlayGround constructor function
function PlayGround() {
    this.x = SCOREBOARD_WIDTH;
    this.y = (GAME_AREA_HEIGHT - PLAYGROUND_HEIGHT) / 2;
    this.width = PLAYGROUND_WIDTH;
    this.height = PLAYGROUND_HEIGHT;
    this.rows = PLAYGROUND_ROWS;
    this.columns = PLAYGROUND_COLUMNS;
    this.cellSize = PLAYGROUND_CELL_SIZE;
    this.grid = this.setPlayGroundGrid();
    this.image = new Image();
}

PlayGround.prototype.getImage = function(images) {
    this.image = images.playground.PLAYGROUND_IMAGE;
};

PlayGround.prototype.setPlayGroundImage = function(gameArea) {
    // Set playground image and draw border
    gameArea.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    gameArea.context.strokeStyle = PLAYGROUND_BORDER_STYLE;
    gameArea.context.lineWidth = PLAYGROUND_BORDER_WIDTH;
    gameArea.context.strokeRect(this.x, this.y, this.width, this.height);
};

PlayGround.prototype.setPlayGroundGrid = function() {
    var twoDimensionalGrid  = new Array(this.rows);
    for (var i = 0; i < twoDimensionalGrid.length; i++) {
        twoDimensionalGrid[i] = new Array(this.columns).fill(0);
    }
    return twoDimensionalGrid;
};

PlayGround.prototype.toZeroPlayGroundGrid = function() {
    this.grid.forEach(function(rowGrid) {
        rowGrid.fill(0);
    });
};

PlayGround.prototype.updateGridValues = function(object) {
    this.toZeroPlayGroundGrid();
    if (object.constructor.name === 'Snake') {
        for(var i = 0; i < object.body.length; i++) {
            this.grid[object.body[i]['y']][object.body[i]['x']] = 1;
        }
    } else if (object.constructor.name === 'Bug') {
        this.grid[object.y][object.x] = 1;
    }
};

// Draw grid for development purpose
PlayGround.prototype.drawGrid = function(gameArea) {
    gameArea.context.fillStyle = PLAYGROUND_GRID_STYLE;
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


// ScoreBoard constructor function
function ScoreBoard(playGround, points, state) {
    this.x = playGround.x + playGround.width;
    this.y = 0;
    this.width = SCOREBOARD_WIDTH;
    this.height = SCOREBOARD_HEIGHT;
    // Statistics to show
    this.points = points || SCOREBOARD_INIT_POINTS;
    this.status = state || SCOREBOARD_INIT_STATUS;
}

ScoreBoard.prototype.update = function(points, status) {
    // Update scoreboard statistics
    this.points += points;
    this.status = status;
};

ScoreBoard.prototype.setScoreBoard = function(gameArea) {
    // Set text context
    gameArea.context.font = TEXT_CONTEXT_FONT;
    gameArea.context.fillStyle = TEXT_CONTEXT_STYLE;
    // Ajustar marcador
    gameArea.context.fillText('Score: ' + this.points, this.x + 20, this.height/4, this.width);
    gameArea.context.fillText('Status: ' + this.status, this.x + 20, this.height/3, this.width);
};
