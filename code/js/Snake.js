// Define Snake Object constants
var SNAKE_DEFAULT_XPOSITION;
var SNAKE_DEFAULT_YPOSITION;
var SNAKE_DEFAULT_XSPEED = 1;
var SNAKE_DEFAULT_YSPEED = 0;
var SNAKE_DEFAULT_STATUS = 'cool';
var SNAKE_SPEEDUP_STATUS;
var SNAKE_POISSON_STATUS;

var ALTEREGOSNAKE_XSPEED = 1.5 * SNAKE_DEFAULT_XSPEED;
var ALTEREGOSNAKE_YSPEED = 1.5 * SNAKE_DEFAULT_YSPEED;


// Snake constructor function
function Snake(x, y, xSpeed, ySpeed) {
    this.xHead = x ? x : SNAKE_DEFAULT_XPOSITION;
    this.yHead = y ? y : SNAKE_DEFAULT_YPOSITION;
    this.body = new Array();
    this.xSpeed = xSpeed ? xSpeed : SNAKE_DEFAULT_XSPEED;
    this.ySpeed = ySpeed ? ySpeed : SNAKE_DEFAULT_YSPEED;
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

Snake.prototype.hasEatBug = function() {
    // Check snake's head and bug position
};

Snake.prototype.checkColision = function() {
    // Check snake's head, body and board limits
};

Snake.prototype.growSnake = function() {
    // Append another body unit to snake's body
};

Snake.prototype.theCuriousCaseOfBenjaminButton = function() {
    // Set snake's initial baby snake body size
};

Snake.prototype.speedySnake = function() {
    // Speed up snake's displacement
};

Snake.prototype.slowlySnake = function() {
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


// Alter Ego Snake constructor function
function AlterEgoSnake(x, y, ALTEREGOSNAKE_XSPEED, ALTEREGOSNAKE_YSPEED) {
    Snake.apply(this, [x, y, ALTEREGOSNAKE_XSPEED, ALTEREGOSNAKE_YSPEED]);
}

AlterEgoSnake.prototype = Object.create(Snake.prototype);
AlterEgoSnake.prototype.constructor = AlterEgoSnake;
