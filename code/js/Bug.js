// Define Bug Object constants
var NEUTRAL_BUG = 'neutral_bug';
var BIG_MEAL_BUG = 'big_meal_bug';
var BENJAMIN_BUTTON_BUG = 'benjamin_button_bug';
var SPEEDY_GONZALEZ_BUG = 'speedy_gonzalez_bug';
var TORTOISE_BUG = 'tortoise_bug';
var POISSON_BUG = 'poisson_bug';
var CRAB_BUG = 'crab_bug';
var ALTEREGO_REVEAL_BUG = 'alter_ego_reveal_bug';

var NEUTRAL_BUG_IMG;
var BIG_MEAL_BUG_IMG;
var BENJAMIN_BUTTON_BUG_IMG;
var SPEEDY_BUG_IMG;
var SLOWLY_BUG_IMG;
var POISSON_BUG_IMG;
var CRAB_BUG_IMG;
var ALTEREGO_REVEAL_BUG_IMG;


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
