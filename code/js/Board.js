// Define GameArea Object constants
var GAME_AREA_WIDTH = window.innerWidth;
var GAME_AREA_HEIGHT = window.innerHeight;
// Define PlayGround Object constants
var PLAYGROUND_WIDTH = 0.8 * GAME_AREA_WIDTH;
var PLAYGROUND_HEIGHT = GAME_AREA_HEIGHT;
// Define ScoreBoard Object constants
var SCOREBOARD_WIDTH = GAME_AREA_WIDTH - PLAYGROUND_WIDTH;
var SCOREBOARD_HEIGHT = GAME_AREA_HEIGHT;
// Define background image path
var BACKGROUND_IMAGE_SRC = './images/board/background.jpg';
// Define scoreboard init and context
var SCOREBOARD_INIT_POINTS = 0;
var SCOREBOARD_INIT_STATE = 'cool';
var SCOREBOARD_CONTEXT_STYLE = '#000';
var TEXT_CONTEXT_STYLE = '#fff';
var TEXT_CONTEXT_FONT = '20px serif';
// Define canvas update interval
var INTERVAL_UPDATE_TIME = 20;


// GameArea constructor function
function GameArea() {
    this.canvas = document.getElementById('snake-game');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = GAME_AREA_WIDTH;
    this.canvas.height = GAME_AREA_HEIGHT;
}

GameArea.prototype.update = function(playGround, scoreBoard) {
    playGround.setBackgroundImage(this);
    scoreBoard.setScoreBoard(this, playGround);
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
    this.x = 0;
    this.y = 0;
    this.width = PLAYGROUND_WIDTH;
    this.height = PLAYGROUND_HEIGHT;
}

PlayGround.prototype.setBackgroundImage = function(gameArea) {
    var image = new Image();
    image.src = BACKGROUND_IMAGE_SRC;
    image.onload = function() {
        gameArea.context.drawImage(image, this.x, this.y, this.width, this.height);
    }.bind(this);
};


// ScoreBoard constructor function
function ScoreBoard(playGround, points, state) {
    this.x = playGround.width;
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
    gameArea.context.fillText('Score: ' + this.points, this.x, this.height/5, this.width);
    gameArea.context.fillText('State: ' + this.state, this.x, this.height/4, this.width);
};
