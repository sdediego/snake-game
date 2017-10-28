// Define Bug Object constants
var NEUTRAL_BUG = 'neutral_bug';
var BIG_MEAL_BUG = 'big_meal_bug';
var BENJAMIN_BUTTON_BUG = 'benjamin_button_bug';
var SPEEDY_BUG = 'speedy_bug';
var SLOWLY_BUG = 'slowly_bug';
var POISSON_BUG = 'poisson_bug';
var CRAB_BUG = 'crab_bug';
var ALTEREGO_REVEAL_BUG = 'alter_ego_reveal_bug';


// Bug constructor function
function Bug(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type ? type : NEUTRAL_BUG;
    this.imageScale;
}

Bug.prototype.setBugImage = function(myGameArea, bugImage) {
    var context = myGameArea.context;
    var image = new Image();
    image.src = bugImage;
    image.onload = function() {
    //    context.drawImage(this, this.x, this.y, );
    }.bind(this);
};
