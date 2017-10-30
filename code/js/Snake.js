// Define Snake Object constants
var SNAKE_DEFAULT_XPOSITION = 9;  // 10th x-position block
var SNAKE_DEFAULT_YPOSITION = 9;  // 10th y-position block
var SNAKE_DEFAULT_BODY_SIZE = 5;  // 5 body units
// Initial displacement configuration
var SNAKE_DEFAULT_SPEED = 1;
var SNAKE_DEFAULT_DIRECTION = 'right';
// Snake's possible status
var SNAKE_DEFAULT_STATUS = 'cool';
var SNAKE_SPEEDUP_STATUS;
var SNAKE_POISSON_STATUS;


// Snake constructor function
function Snake(x, y, size) {
    // 0 < this.xHead < PLAYGROUND_COLUMNS
    // 0 < this.yHead < PLAYGROUND_ROWS
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
}

Snake.prototype.startCreeping = function(direction, speed, status) {
    this.direction = direction ? direction : SNAKE_DEFAULT_DIRECTION;
    this.speed = speed ? speed : SNAKE_DEFAULT_SPEED;
    this.status = status ? status : SNAKE_DEFAULT_STATUS;
    console.log('cabeza: ', this.xHead, this.yHead);
    for (var i = 0; i < this.size; i++) {
        this.body.push({
            'x': this.xHead - i * this.directions[this.direction][0],
            'y': this.yHead - i * this.directions[this.direction][1]
        });
        console.log(this.body[i]);
    }
    //console.log('cabeza: ', this.xHead, this.yHead);
    //console.log(this.body);
};

Snake.prototype.creep = function() {
    // Snake's displacement forward following current direction
    //console.log(this.xHead, this.yHead);
    if (this.xHead === PLAYGROUND_COLUMNS - 1 && this.direction === 'right') {
        this.xHead = 0;
    } else if (this.xHead === 0 && this.direction === 'left') {
        this.xHead = PLAYGROUND_COLUMNS - 1;
    } else if (this.yHead === 0 && this.direction === 'up') {
        this.yHead = PLAYGROUND_ROWS - 1;
    } else if (this.yHead === PLAYGROUND_ROWS - 1 && this.direction === 'down') {
        this.yHead = 0;
    } else {
        this.xHead += this.directions[this.direction][0];
        this.yHead += this.directions[this.direction][1];
    }
    //console.log(this.xHead, this.yHead);
    this.body.unshift({
        'x': this.xHead,
        'y': this.yHead,
    });
    this.body.pop();
    //console.log(this.body);
};

Snake.prototype.hasEatenBug = function() {
    // Check snake's head and bug position
};

Snake.prototype.drawSnake = function(gameArea, playGround) {
    console.log('Pintado la serpiente');
    console.log(this.body);
    this.body.forEach(function(bodyPart) {
        gameArea.context.fillStyle = 'red';
        gameArea.context.fillRect(
            bodyPart['x']*playGround.cellSize + playGround.x,
            bodyPart['y']*playGround.cellSize,
            playGround.cellSize,
            playGround.cellSize
            //console.log('x', bodyPart['x']*playGround.cellSize + playGround.x),
            //console.log('y', bodyPart['y']*playGround.cellSize),
            //console.log('width', playGround.cellSize),
            //console.log('height', playGround.cellSize)
        );
    });
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



Snake.prototype.hasCrash = function() {
    // Check snake's head, body and board limits
};

Snake.prototype.growSnake = function() {
    // Append another body unit to snake's body
    this.size++;

};

Snake.prototype.backToChildhood = function() {
    // Set snake's initial baby snake body size
};

Snake.prototype.speedyGonzalez = function() {
    // Speed up snake's displacement
};

Snake.prototype.toTortoise = function() {
    // Slow down snake's displacement
};

Snake.prototype.reverseDirection = function() {
    // Reverse snake's head and tail
};

Snake.prototype.onDrugs = function() {
    // Alter snake control buttons
};

Snake.prototype.invokeAlterEgoSnake = function() {
    // Split up snake in two competing hungry snakes
};

Snake.prototype.dieSnake = function() {
    // Give last goodbye to our lovely reptile
};
