// Define Snake Object constants
var SNAKE_DEFAULT_XPOSITION;
var SNAKE_DEFAULT_YPOSITION;
var SNAKE_DEFAULT_SPEED = 1;
var SNAKE_DEFAULT_DIRECTION = 'right';
var SNAKE_DEFAULT_STATUS = 'cool';
var SNAKE_SPEEDUP_STATUS;
var SNAKE_POISSON_STATUS;


// Snake constructor function
function Snake(x, y, direction, speed) {
    this.xHead = x ? x : SNAKE_DEFAULT_XPOSITION;
    this.yHead = y ? y : SNAKE_DEFAULT_YPOSITION;
    this.body = new Array();
    this.direction = direction ? direction : SNAKE_DEFAULT_DIRECTION;
    this.speed = speed ? speed : SNAKE_DEFAULT_SPEED;
    this.status = SNAKE_DEFAULT_STATUS;
}

Snake.prototype.moveUp = function() {
    this.ySpeed--;
};

Snake.prototype.moveDown = function() {
    this.ySpeed++;
};

Snake.prototype.moveRight = function() {
    this.xSpeed++;
};

Snake.prototype.moveLeft = function() {
    this.xSpeed--;
};

Snake.prototype.newPosition = function() {
    this.xHead += xSpeed;
    this.yHead += ySpeed;
};

Snake.prototype.hasEatenBug = function() {
    // Check snake's head and bug position
};

Snake.prototype.checkColision = function() {
    // Check snake's head, body and board limits
};

Snake.prototype.growSnake = function() {
    // Append another body unit to snake's body
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
