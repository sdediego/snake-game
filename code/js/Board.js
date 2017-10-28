// Define GameArea Object constants
var GAME_AREA_DEFAULT_WIDTH = 1500;
var GAME_AREA_DEFAULT_HEIGHT = 500;
var SCOREBOARD_DEFAULT_WIDTH = 300;
var SCOREBOARD_DEFAULT_HEIGHT = 50;

var INTERVAL_UPDATE_TIME = 20;

var CONTEXT_FONT = '20px serif';
var CONTEXT_STYLE = 'black';


// GameArea constructor function
function GameArea(width, height) {
    this.canvas = document.getElementById('snake-game');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = width ? width : GAME_AREA_DEFAULT_WIDTH;
    this.canvas.height = height ? height : GAME_AREA_DEFAULT_HEIGHT;
}

GameArea.prototype.start = function(updateFunction) {
    this.interval = setInterval(updateFunction, INTERVAL_UPDATE_TIME);
};

GameArea.prototype.stop = function() {
    clearInterval(this.interval);
};

GameArea.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

GameArea.prototype.scoreBoard = function(points, state) {
    this.context.font = CONTEXT_FONT;
    this.context.fillStylle = CONTEXT_STYLE;
    this.context.fillText('Score: ' + points + ' State: ' + state,
                          SCOREBOARD_DEFAULT_WIDTH, SCOREBOARD_DEFAULT_HEIGHT);
};
