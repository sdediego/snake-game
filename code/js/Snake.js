// Define Snake Object constants
var SNAKE_DEFAULT_XPOSITION = 4;  // 10th x-position block
var SNAKE_DEFAULT_YPOSITION = 9;  // 10th y-position block
var SNAKE_DEFAULT_BODY_SIZE = 5;  // 5 body units
// Initial displacement configuration
var SNAKE_DEFAULT_SPEED = 2;
var SNAKE_DEFAULT_DIRECTION = 'right';
// Snake's possible status
var SNAKE_DEFAULT_STATUS = 'cool';
var SNAKE_SPEEDUP_STATUS = 'speedy';
var SNAKE_SLOWLY_STATUS = 'slowly';
var SNAKE_POISSON_STATUS = 'inverse';


// Snake constructor function
function Snake(x, y, size) {
    this.xHead = x || x === 0 ? x : SNAKE_DEFAULT_XPOSITION;
    this.yHead = y || y === 0 ? y : SNAKE_DEFAULT_YPOSITION;
    this.size = size || SNAKE_DEFAULT_BODY_SIZE;
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
    this.direction = direction || SNAKE_DEFAULT_DIRECTION;
    this.speed = speed || SNAKE_DEFAULT_SPEED;
    this.status = status || SNAKE_DEFAULT_STATUS;

    for (var i = 0; i < this.size; i++) {
        this.body.push({
            'x': this.xHead - i * this.directions[this.direction][0],
            'y': this.yHead - i * this.directions[this.direction][1]
        });
    }
};

Snake.prototype.creep = function(hasEaten) {
    this.xHead += this.directions[this.direction][0];
    this.yHead += this.directions[this.direction][1];
    this.body.unshift({
        'x': this.xHead,
        'y': this.yHead,
    });

    if (!hasEaten){
        this.body.pop();
    }
};

Snake.prototype.getImage = function(images) {
    this.images = images.snake;
};

Snake.prototype.drawSnake = function(gameArea, playGround) {
    for (var i = 0; i < this.body.length; i++) {
        var bodyPart = this.body[i];
        var x = bodyPart['x'];
        var y = bodyPart['y'];
        var image = new Image();

        if (i === 0) {
            // Head
            if (y < this.body[i+1]['y']) {
                image = this.images.SNAKE_IMAGE_HEAD_UP;
            } else if (y > this.body[i+1]['y']) {
                image = this.images.SNAKE_IMAGE_HEAD_DOWN;
            } else if (x > this.body[i+1]['x']) {
                image = this.images.SNAKE_IMAGE_HEAD_RIGHT;
            } else if (x < this.body[i+1]['x']) {
                image = this.images.SNAKE_IMAGE_HEAD_LEFT;
            }
        } else if (i === this.body.length - 1) {
            // Tail
            if (y < this.body[i-1]['y']) {
                image = this.images.SNAKE_IMAGE_TAIL_DOWN;
            } else if (y > this.body[i-1]['y'] ) {
                image = this.images.SNAKE_IMAGE_TAIL_UP;
            } else if (x < this.body[i-1]['x']) {
                image = this.images.SNAKE_IMAGE_TAIL_RIGHT;
            } else if (x > this.body[i-1]['x']) {
                image = this.images.SNAKE_IMAGE_TAIL_LEFT;
            }
        } else {
            // Body part image except head or tail
            if (this.body[i-1]['x'] < x && this.body[i+1]['x'] > x || this.body[i-1]['x'] > x && this.body[i+1]['x'] < x) {
                // Body horizontal
                image = this.images.SNAKE_IMAGE_BODY_HORIZONTAL;
            } else if (this.body[i-1]['y'] < y && this.body[i+1]['y'] > y || this.body[i-1]['y'] > y && this.body[i+1]['y'] < y) {
                // Body vertical
                image = this.images.SNAKE_IMAGE_BODY_VERTICAL;
            } else if (this.body[i-1]['y'] < y && this.body[i+1]['x'] < x || this.body[i-1]['x'] < x && this.body[i+1]['y'] < y) {
                // Body right-up
                image = this.images.SNAKE_IMAGE_TURN_RIGHT_UP;
            } else if (this.body[i-1]['x'] < x && this.body[i+1]['y'] > y || this.body[i-1]['y'] > y && this.body[i+1]['x'] < x) {
                // Body right-down
                image = this.images.SNAKE_IMAGE_TURN_RIGHT_DOWN;
            } else if (this.body[i-1]['x'] > x && this.body[i+1]['y'] < y || this.body[i-1]['y'] < y && this.body[i+1]['x'] > x) {
                // Body left-up
                image = this.images.SNAKE_IMAGE_TURN_LEFT_UP;
            } else if (this.body[i-1]['y'] > y && this.body[i+1]['x'] > x || this.body[i-1]['x'] > x && this.body[i+1]['y'] > y) {
                // Body left-down
                image = this.images.SNAKE_IMAGE_TURN_LEFT_DOWN;
            }
        }

        gameArea.context.drawImage(
            image,
            bodyPart['x']*playGround.cellSize + playGround.x,
            bodyPart['y']*playGround.cellSize,
            playGround.cellSize,
            playGround.cellSize
        );
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
    // Set snake status according to the eaten bug
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
    this.setSnakeState(1, SNAKE_SPEEDUP_STATUS);
};

Snake.prototype.toTortoise = function() {
    // Slow down snake's displacement
    this.setSnakeState(4, SNAKE_SLOWLY_STATUS);
};

Snake.prototype.reverseDirection = function() {
    // Reverse snake's head and tail
    this.setSnakeState();
    this.body = this.body.reverse();
    this.xHead = this.body[0]['x'];
    this.yHead = this.body[0]['y'];
    if (this.xHead == this.body[1]['x']) {
        if (this.yHead < this.body[1]['y']) {
            this.direction = 'up';
        } else if (this.yHead > this.body[1]['y']) {
            this.direction ='down';
        }
    } else if (this.yHead == this.body[1]['y']) {
        if (this.xHead < this.body[1]['x']) {
            this.direction = 'left';
        } else if (this.xHead > this.body[1]['x']) {
            this.direction = 'right';
        }
    }
};

Snake.prototype.onDrugs = function() {
    // Alter snake control buttons
    this.setSnakeState(SNAKE_DEFAULT_SPEED, SNAKE_POISSON_STATUS);
};
