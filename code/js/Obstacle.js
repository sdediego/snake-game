// Define Bug Object constants
var OBSTACLE_IMAGE_SRC = './../images/obstacle/obstacle.png';
var OBSTACLE_IMAGE_SCALE;


// Obstacle constructor function
function Obstacle(x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.imageScale;
}

Obstacle.prototype.setObstacleImage = function(gameArea, obstacleImage) {
    //var context = myGameArea.context;
    //var image = new Image();
    this.image.src = obstacleImage;
    this.image.onload = function() {
    //    gameArea.context.drawImage(this.image, this.x, this.y,  );
    }.bind(this);
};
