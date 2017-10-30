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
    if (mySnake.hasEatenBug()) {
        //Completar logica
    }
    if (mySnake.hasCrash()) {
        myGameArea.stop();
        //myGameArea.gameOver();
        return;
    };
}

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            mySnake.moveLeft();
            break;
        case 38:
            mySnake.moveUp();
            break;
        case 39:
            mySnake.moveRight();
            break;
        case 40:
            mySnake.moveDown();
            break;
    }
};
