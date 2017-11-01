// Define Snake Object constants
var SNAKE_DEFAULT_XPOSITION = 9;  // 10th x-position block
var SNAKE_DEFAULT_YPOSITION = 9;  // 10th y-position block
var SNAKE_DEFAULT_BODY_SIZE = 5;  // 5 body units
// Initial displacement configuration
var SNAKE_DEFAULT_SPEED = 1;
var SNAKE_DEFAULT_DIRECTION = 'right';
// Snake's possible status
var SNAKE_DEFAULT_STATUS = 'cool';
var SNAKE_SPEEDUP_STATUS = 'speedy';
var SNAKE_POISSON_STATUS = 'high';
// Snake images
var SNAKE_IMAGE_HEAD_UP = './images/snake/yellowHeadUp.png';
var SNAKE_IMAGE_HEAD_RIGHT = './images/snake/yellowHeadRight.png';
var SNAKE_IMAGE_HEAD_DOWN = './images/snake/yellowHeadDown.png';
var SNAKE_IMAGE_HEAD_LEFT = './images/snake/yellowHeadLeft.png';
var SNAKE_IMAGE_TAIL_UP = './images/snake/yellowTailUp.png';
var SNAKE_IMAGE_TAIL_RIGHT = './images/snake/yellowTailRight.png';
var SNAKE_IMAGE_TAIL_DOWN = './images/snake/yellowTailDown.png';
var SNAKE_IMAGE_TAIL_LEFT = './images/snake/yellowTailLeft.png';
var SNAKE_IMAGE_BODY_HORIZONTAL = './images/snake/yellowBodyHorizontal.png';
var SNAKE_IMAGE_BODY_VERTICAL = './images/snake/yellowBodyVertical.png';
var SNAKE_IMAGE_TURN_RIGHT_UP = './images/snake/yellowBodyRightUp.png';
var SNAKE_IMAGE_TURN_RIGHT_DOWN = './images/snake/yellowRightDown.png';
var SNAKE_IMAGE_TURN_LEFT_UP = './images/snake/yellowLeftUp.png';
var SNAKE_IMAGE_TURN_LEFT_DOWN = './images/snake/yellowLeftDown.png';


// Snake constructor function
function Snake(x, y, size) {
    this.xHead = x || x === 0 ? x : SNAKE_DEFAULT_XPOSITION;
    this.yHead = y || y === 0 ? y : SNAKE_DEFAULT_YPOSITION;
    this.size = size ? size : SNAKE_DEFAULT_BODY_SIZE;
    this.body = new Array();
    this.directions = {
        'up'    : [0, -1],
        'down'  : [0, 1],
        'right' : [1, 0],
        'left'  : [-1, 0],
    };
    this.images = {};
}

Snake.prototype.startCreeping = function(direction, speed, status) {
    this.direction = direction ? direction : SNAKE_DEFAULT_DIRECTION;
    this.speed = speed ? speed : SNAKE_DEFAULT_SPEED;
    this.status = status ? status : SNAKE_DEFAULT_STATUS;

    for (var i = 0; i < this.size; i++) {
        this.body.push({
            'x': this.xHead - i * this.directions[this.direction][0],
            'y': this.yHead - i * this.directions[this.direction][1]
        });
    }
};

Snake.prototype.creep = function(hasEaten) {
    // Snake's displacement forward following current direction
    //console.log(this.xHead, this.yHead);
//    if (this.xHead === PLAYGROUND_COLUMNS - 1 && this.direction === 'right') {
//        this.xHead = 0;
//    } else if (this.xHead === 0 && this.direction === 'left') {
//        this.xHead = PLAYGROUND_COLUMNS - 1;
//    } else if (this.yHead === 0 && this.direction === 'up') {
//        this.yHead = PLAYGROUND_ROWS - 1;
//    } else if (this.yHead === PLAYGROUND_ROWS - 1 && this.direction === 'down') {
//        this.yHead = 0;
//    } else {
        this.xHead += this.directions[this.direction][0];
        this.yHead += this.directions[this.direction][1];
//    }
    //console.log(this.xHead, this.yHead);
    this.body.unshift({
        'x': this.xHead,
        'y': this.yHead,
    });
    if (!hasEaten){
        this.body.pop();
    }
    //console.log(this.body);
};

//Snake.prototype.drawSnake = function(gameArea, playGround) {
//    //console.log('Pintado la serpiente');
//    //console.log(this.body);
//    this.body.forEach(function(bodyPart) {
//        gameArea.context.fillStyle = 'red';
//        gameArea.context.fillRect(
//            bodyPart['x']*playGround.cellSize + playGround.x,
//            bodyPart['y']*playGround.cellSize,
//            playGround.cellSize,
//            playGround.cellSize
//            //console.log('x', bodyPart['x']*playGround.cellSize + playGround.x),
//            //console.log('y', bodyPart['y']*playGround.cellSize),
//            //console.log('width', playGround.cellSize),
//            //console.log('height', playGround.cellSize)
//        );
//    });
//};

Snake.prototype.getImage = function(images) {
    this.images = images;
    //console.log(this.image);
};

Snake.prototype.drawSnake = function(gameArea, playGround) {
    for (var i = 0; i < this.body.length; i++) {
        var bodyPart = this.body[i];
        var x = bodyPart['x'];
        var y = bodyPart['y'];
        var width = playGround.cellsize;
        var height = playGround.cellsize;
        var image = new Image();

        if (i === 0) {
            console.log('Cabeza: ', bodyPart);
            var nextBodyPart = this.body[i+1];
            if (y < nextBodyPart['y']) {
                //image.src = SNAKE_IMAGE_HEAD_UP;
                image = this.images.SNAKE_IMAGE_HEAD_UP;
            } else if (y > nextBodyPart['y']) {
                //image.src = SNAKE_IMAGE_HEAD_DOWN;
                image = this.images.SNAKE_IMAGE_HEAD_DOWN;
            } else if (x > nextBodyPart['x']) {
                //image.src =SNAKE_IMAGE_HEAD_RIGHT;
                image = this.images.SNAKE_IMAGE_HEAD_RIGHT;
            } else if (x < nextBodyPart['x']) {
                //image.src = SNAKE_IMAGE_HEAD_LEFT;
                image = this.images.SNAKE_IMAGE_HEAD_LEFT;
            }
        } else if (i === this.body.length - 1) {
            console.log('Tail: ', bodyPart);
            var previousBodyPart = this.body[i-1];
            if (y < previousBodyPart['y']) {
                //image.src = SNAKE_IMAGE_TAIL_UP;
                image = this.images.SNAKE_IMAGE_TAIL_DOWN;
            } else if (y > previousBodyPart['y'] ) {
                //image.src = SNAKE_IMAGE_TAIL_DOWN;
                image = this.images.SNAKE_IMAGE_TAIL_UP;
            } else if (x < previousBodyPart['x']) {
                //image.src = SNAKE_IMAGE_TAIL_RIGHT;
                image = this.images.SNAKE_IMAGE_TAIL_RIGHT;
            } else if (x > previousBodyPart['x']) {
                //image.src = SNAKE_IMAGE_TAIL_LEFT;
                image = this.images.SNAKE_IMAGE_TAIL_LEFT;
            }
        } else {
            // Body part image except head or tail
            console.log('Body: ', bodyPart);
            var previousBodyPart = this.body[i-1];
            var nextBodyPart = this.body[i+1];
            if (previousBodyPart['x'] < x && nextBodyPart['x'] > x || previousBodyPart['x'] > x && nextBodyPart['x'] < x) {
                // Body horizontal
                //image.src = SNAKE_IMAGE_BODY_HORIZONTAL;
                image = this.images.SNAKE_IMAGE_BODY_HORIZONTAL;
            } else if (previousBodyPart['y'] < y && nextBodyPart['y'] > y || previousBodyPart['y'] > y && nextBodyPart['y'] < y) {
                // Body vertical
                //image.src = SNAKE_IMAGE_BODY_VERTICAL;
                image = this.images.SNAKE_IMAGE_BODY_VERTICAL;
            } else if (previousBodyPart['y'] < y && nextBodyPart['x'] < x || nextBodyPart['y'] < y && previousBodyPart['x'] < x) {
                // Body right-up
                //image.src = SNAKE_IMAGE_TURN_RIGHT_UP;
                image = this.images.SNAKE_IMAGE_TURN_RIGHT_UP;
            } else if (previousBodyPart['x'] < x && nextBodyPart['y'] > y || nextBodyPart['x'] < x && previousBodyPart['y'] > y) {
                // Body right-down
                //image.src = SNAKE_IMAGE_TURN_RIGHT_DOWN;
                image = this.images.SNAKE_IMAGE_TURN_RIGHT_DOWN;
            } else if (previousBodyPart['x'] > x && nextBodyPart['y'] < y || nextBodyPart['x'] > x && previousBodyPart['y'] < y) {
                // Body left-up
                //image.src = SNAKE_IMAGE_TURN_LEFT_UP;
                image = this.images.SNAKE_IMAGE_TURN_LEFT_UP;
            } else if (previousBodyPart['y'] > y && nextBodyPart['x'] > x || previousBodyPart['x'] > x && nextBodyPart['y'] > y) {
                // Body left-down
                //image.src = SNAKE_IMAGE_TURN_LEFT_DOWN;
                image = this.images.SNAKE_IMAGE_TURN_LEFT_DOWN;
            }
        }

        // Draw corresponding image
        //image.onload = function() {
            gameArea.context.drawImage(
                image,
                bodyPart['x']*playGround.cellSize + playGround.x,
                bodyPart['y']*playGround.cellSize,
                playGround.cellSize,
                playGround.cellSize
            );
        //}.bind(this);
    }
};

Snake.prototype.moveUp = function() {
    if (this.direction != 'down') {
        this.direction = 'up';
    }
};

Snake.prototype.moveDown = function() {
    if (this.direction != 'up') {
        this.direction = 'down';
    }
};

Snake.prototype.moveRight = function() {
    if (this.direction != 'left') {
        this.direction = 'right';
    }
};

Snake.prototype.moveLeft = function() {
    if (this.direction != 'right') {
        this.direction = 'left';
    }
};

Snake.prototype.hasEatenBug = function(bug) {
    // Check snake's head and bug position
    return this.xHead === bug.x && this.yHead === bug.y;
};

Snake.prototype.hasCrash = function(playGround) {
    // Check snake's head and body for colision
    for (var i = 1; i < this.body.length; i++) {
        if (this.xHead === this.body[i]['x'] && this.yHead === this.body[i]['y']) {
            return true;
        }
    }
    // Check snake's head for colision against edge
    if (this.xHead === playGround.columns || this.xHead === -1 || this.yHead == playGround.rows || this.yHead === -1) {
        return true;
    }

    return false;
};

Snake.prototype.setSnakeState = function(speed, status) {
    this.speed = speed || SNAKE_DEFAULT_SPEED;
    this.status = status || SNAKE_DEFAULT_STATUS;
};

Snake.prototype.growSnake = function(status) {
    // Append another body unit to snake's body
    this.size++;
    this.setSnakeState();
};

Snake.prototype.backToChildhood = function() {
    // Set snake's initial baby snake body size
    this.setSnakeState();
    this.size = SNAKE_DEFAULT_BODY_SIZE;
    this.body.splice(5);
};

Snake.prototype.speedyGonzalez = function() {
    // Speed up snake's displacement
    this.setSnakeState(2, SNAKE_SPEEDUP_STATUS);
};

Snake.prototype.toTortoise = function() {
    // Slow down snake's displacement
    this.setSnakeState(0.5);
};

Snake.prototype.reverseDirection = function() {
    // Reverse snake's head and tail
    this.setSnakeState();
    this.body = this.body.reverse();
    this.xHead = this.body[0]['x'];
    this.yHead = this.body[0]['y'];
    if (this.xHead == this.body[1]['x']) {
        if (this.yHead < this.body[1]['y']) {
            this.direction;
        } else if (this.yHead > this.body[1]['y']) {
            this.direction;
        }
    } else if (this.yHead == this.body[1]['y']) {
        if (this.xHead < this.body[1]['x']) {
            this.direction;
        } else if (this.xHead > this.body[1]['x']) {
            this.direction;
        }
    }
};

Snake.prototype.onDrugs = function() {
    // Alter snake control buttons
    this.setSnakeState(1, SNAKE_POISSON_STATUS);
};

Snake.prototype.invokeAlterEgoSnake = function() {
    // Split up snake in two competing hungry snakes
};

Snake.prototype.dieSnake = function() {
    // Give last goodbye to our lovely reptile
};
