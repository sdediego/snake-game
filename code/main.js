// Set global variables
var myGameArea;
var myPlayGround;
var myScoreBoard;
var mySnake;
var myBug;

window.onload = function() {
    imagesLoader(allGameImages, function(images) {
        myGameArea = new GameArea();
        //myGameArea.getImage(images);
        myGameArea.setBackgroundImage();
        myPlayGround = new PlayGround();
        myPlayGround.getImage(images);
        myScoreBoard = new ScoreBoard(myPlayGround);
        //myScoreBoard.getImage(images);
        mySnake = new Snake();
        mySnake.getImage(images);
        mySnake.startCreeping();
        myBug = new Bug();
        //myBug.getImage(images);
        myBug.getRandomBug(myPlayGround);
        // Initialize the game loop
        myGameArea.init(myPlayGround, myScoreBoard, updateGameArea);
    });
};

function imagesLoader(imagesPaths, callback) {
    var imageObjects = {};
    var numberOfImages = 0;
    var numberOfLoadedImages = 0;

    for (var image in imagesPaths) {
        numberOfImages++;
    }

    for (var image in imagesPaths) {
        console.log(image);
        imageObjects[image] = new Image();
        imageObjects[image].src = imagesPaths[image];
        imageObjects[image].onload = function() {
            if (++numberOfLoadedImages >= numberOfImages) {
                callback(imageObjects);
            }
        };
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.update(myPlayGround, myScoreBoard);
    mySnake.drawSnake(myGameArea, myPlayGround);
    myBug.drawBug(myGameArea, myPlayGround);

    if (mySnake.hasEatenBug(myBug)) {
        //myScoreBoard.
        mySnake.creep(true);
        mySnake.growSnake();
        setSnakeStatus();
        myBug.getRandomBug(myPlayGround);
    } else {
        mySnake.creep(false);
    }

    if (mySnake.hasCrash(myPlayGround)) {
        myGameArea.stop();
        //mySnake.dieSnake();
        return;
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

function moveSnake(event) {
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
}

function moveSnakeOnDrugs(event) {
    switch (event.keyCode) {
        case 37:
            mySnake.moveRight();
            break;
        case 38:
            mySnake.moveDown();
            break;
        case 39:
            mySnake.moveLeft();
            break;
        case 40:
            mySnake.moveUp();
            break;
        case 27:
            myGameArea.stop();
            break;
    }
}

document.onkeydown = function(event) {
    if (mySnake.status !== SNAKE_POISSON_STATUS) {
        moveSnake(event);
    } else if (mySnake.status === SNAKE_POISSON_STATUS ) {
        moveSnakeOnDrugs(event);
    }
};
