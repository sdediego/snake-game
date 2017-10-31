// Set global variables
var myGameArea;
var myPlayGround;
var myScoreBoard;
var mySnake;
var myBug;

window.onload = function() {
    myGameArea = new GameArea();
    myGameArea.setBackgroundImage();
    myPlayGround = new PlayGround();
    myScoreBoard = new ScoreBoard(myPlayGround);
    mySnake = new Snake();
    mySnake.startCreeping();
    myBug = new Bug();
    myBug.getRandomBug(myPlayGround);
    // Initialize the game loop

    myGameArea.init(myPlayGround, myScoreBoard, updateGameArea);
    //for (var i = 0; i < 5; i++) {
        //mySnake.drawSnake(myGameArea, myPlayGround);
        //mySnake.creep();
    //}
};

function updateGameArea() {
    myGameArea.clear();
    myGameArea.update(myPlayGround, myScoreBoard);
    myBug.drawBug(myGameArea, myPlayGround);
    mySnake.drawSnake(myGameArea, myPlayGround);

    if (mySnake.hasEatenBug(myBug)) {
        //Completar logica
        //myScoreBoard.
        mySnake.creep(true);
        mySnake.growSnake();
        //setSnakeStatus();
        myBug.getRandomBug(myPlayGround);
    } else {
        mySnake.creep(false);
    }

    if (mySnake.hasCrash()) {
        myGameArea.stop();
        //mySnake.dieSnake();
        //return;
    }

    myPlayGround.updateGridValues(mySnake);
    myPlayGround.updateGridValues(myBug);
}

function setSnakeStatus() {
    switch (myBug.bugType.type) {
        case NEUTRAL_BUG:
            break;
        case BIG_MEAL_BUG:
            // Scoreboard up to five points.
            break;
        case BENJAMIN_BUTTON_BUG:
            mySnake.backToChildhood();
            break;
        case SPEEDY_GONZALEZ_BUG:
            mySnake.speedyGonzalez();
            break;
        case TORTOISE_BUG:
            mySnake.toTortoise();
            break;
        case POISSON_BUG:
            mySnake.onDrugs();
            break;
        case CRAB_BUG:
            mySnake.reverseDirection();
            break;
        case ALTEREGO_REVEAL_BUG:
            mySnake.invokeAlterEgoSnake();
            break;
    }
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
        case 27:
            myGameArea.stop();
            break;
    }
};
