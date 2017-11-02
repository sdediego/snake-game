// Set global variables
var myGameArea;
var myPlayGround;
var myScoreBoard;
var mySnake;
var myBug;

window.onload = function() {
    imagesLoader(allGameImages, function(images) {
        myGameArea = new GameArea();
        myGameArea.getImage(images);
        myGameArea.setBackgroundImage();
        myPlayGround = new PlayGround();
        myPlayGround.getImage(images);
        myScoreBoard = new ScoreBoard(myPlayGround);
        //myScoreBoard.getImage(images);
        mySnake = new Snake();
        mySnake.getImage(images);
        mySnake.startCreeping();
        myBug = new Bug();
        myBug.getImage(images);
        myBug.getRandomBug(myPlayGround);
        // Initialize the game loop
        myGameArea.init(myPlayGround, myScoreBoard, updateGameArea);
    });
};

// Load all images before starting the game
function imagesLoader(imagesPaths, callback) {
    var imageObjects = {};
    var numberOfImages = 0;
    var numberOfLoadedImages = 0;
    var keys = Object.keys(imagesPaths);

    for (var type in keys) {
        for (var image in imagesPaths[keys[type]]) {
            numberOfImages++;
        }
    }

    //var keys = Object.keys(imagesPaths);
    for (var index in keys) {
        imageObjects[keys[index]] = {};
        for (var image in imagesPaths[keys[index]]) {
            imageObjects[keys[index]][image] = new Image();
            imageObjects[keys[index]][image].src = imagesPaths[keys[index]][image];
            imageObjects[keys[index]][image].onload = function() {
                if (++numberOfLoadedImages >= numberOfImages) {
                    callback(imageObjects);
                }
            };
        }
    }
}


function updateGameArea() {

    myGameArea.frames++;
    if (myGameArea.frames % mySnake.speed === 0) {
        myGameArea.clear();
        myGameArea.update(myPlayGround, myScoreBoard);
        myBug.drawBug(myGameArea, myPlayGround);
        mySnake.drawSnake(myGameArea, myPlayGround);

        if (mySnake.hasEatenBug(myBug)) {
            mySnake.growSnake();
            mySnake.creep(true);
            setSnakeStatus();
            myBug.getRandomBug(myPlayGround);
            myScoreBoard.update(1, mySnake.status);
            //console.log(myBug.bugType);
        } else {
            mySnake.creep(false);
        }

        if (mySnake.hasCrash(myPlayGround)) {
            myGameArea.stop();
            //myPlayGround.dieSnake();
            return;
        }

        myPlayGround.updateGridValues(mySnake);
        myPlayGround.updateGridValues(myBug);
    }
}

function setSnakeStatus() {
    switch (myBug.bugType.type) {
        case 'NEUTRAL_BUG':
            break;
        case 'BIG_MEAL_BUG':
            // Scoreboard up to five points.
            break;
        case 'BENJAMIN_BUTTON_BUG':
            mySnake.backToChildhood();
            break;
        case 'SPEEDY_GONZALEZ_BUG':
            mySnake.speedyGonzalez();
            break;
        case 'TORTOISE_BUG':
            mySnake.toTortoise();
            break;
        case 'POISSON_BUG':
            mySnake.onDrugs();
            break;
        case 'CRAB_BUG':
            mySnake.reverseDirection();
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
