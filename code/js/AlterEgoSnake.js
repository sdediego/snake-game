// Define AlterEgoSnake Object constants
var ALTEREGOSNAKE_SPEED = 1.5 * SNAKE_DEFAULT_SPEED;


// Alter Ego Snake constructor function
function AlterEgoSnake(x, y, direction, ALTEREGOSNAKE_SPEED) {
    Snake.apply(this, [x, y, direction, ALTEREGOSNAKE_SPEED]);
}

AlterEgoSnake.prototype = Object.create(Snake.prototype);
AlterEgoSnake.prototype.constructor = AlterEgoSnake;
