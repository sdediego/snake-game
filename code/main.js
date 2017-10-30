var myGameArea;
var myPlayGround;
var myScoreBoard;
var mySnake;

window.onload = function() {
    myGameArea = new GameArea();
    myGameArea.setBackgroundImage();
    myPlayGround = new PlayGround();
    myScoreBoard = new ScoreBoard(myPlayGround);
    mySnake = new Snake();

    myBug = new Bug();
    // Initialize the game loop
    myGameArea.init(myPlayGround, myScoreBoard, updateGameArea);
    mySnake.startCreeping();
    //for (var i = 0; i < 5; i++) {
        //mySnake.drawSnake(myGameArea, myPlayGround);
        //mySnake.creep();
    //}
};

function updateGameArea() {
    myGameArea.clear();
    myGameArea.update(myPlayGround, myScoreBoard);
    mySnake.drawSnake(myGameArea, myPlayGround);
    mySnake.creep();


}
