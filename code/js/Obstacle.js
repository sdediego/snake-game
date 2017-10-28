// Define Bug Object constants
var OBSTACLE_IMAGE_SRC = './../images/obstacle.png';
var OBSTACLE_IMAGE_SCALE;


// Obstacle constructor function
function Obstacle(x, y) {
    this.x = x;
    this.y = y;
    this.imageScale;
}

Obstacle.prototype.setObstacleImage = function(myGameArea) {
    var context = myGameArea.context;
    var image = new Image();
    image.src = OBSTACLE_IMAGE_SRC;
    image.onload = function() {
    //    context.drawImage(image, this.x, this.y,  );
    }.bind(this);
};
