var myGameArea;
var playGround;
var scoreBoard;
var snake;

window.onload = function() {
    myGameArea = new GameArea();
    playGround = new PlayGround();
    scoreBoard = new ScoreBoard(playGround);
    snake = new Snake();

    myGameArea.init(playGround, scoreBoard, updateGameArea);
};

function updateGameArea() {

}
