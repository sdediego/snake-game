// Define Bug Object constants
var NEUTRAL_BUG = 'neutral_bug';
var BIG_MEAL_BUG = 'big_meal_bug';
var BENJAMIN_BUTTON_BUG = 'benjamin_button_bug';
var SPEEDY_GONZALEZ_BUG = 'speedy_gonzalez_bug';
var TORTOISE_BUG = 'tortoise_bug';
var POISSON_BUG = 'poisson_bug';
var CRAB_BUG = 'crab_bug';
var ALTEREGO_REVEAL_BUG = 'alter_ego_reveal_bug';
// Define Bug image paths
var NEUTRAL_BUG_IMG;
var BIG_MEAL_BUG_IMG;
var BENJAMIN_BUTTON_BUG_IMG;
var SPEEDY_BUG_IMG;
var SLOWLY_BUG_IMG;
var POISSON_BUG_IMG;
var CRAB_BUG_IMG;
var ALTEREGO_REVEAL_BUG_IMG;
// Define Bug set
var BUG_TYPE = [
    {type : NEUTRAL_BUG,         image : 'yellow'},
    {type : BIG_MEAL_BUG,        image : BIG_MEAL_BUG_IMG},
    {type : BENJAMIN_BUTTON_BUG, image : BENJAMIN_BUTTON_BUG_IMG},
    {type : SPEEDY_GONZALEZ_BUG, image : SPEEDY_BUG_IMG},
    {type : TORTOISE_BUG,        image : SLOWLY_BUG_IMG},
    {type : POISSON_BUG,         image : POISSON_BUG_IMG},
    {type : CRAB_BUG,            image : CRAB_BUG_IMG},
    //{type : ALTEREGO_REVEAL_BUG, image : ALTEREGO_REVEAL_BUG_IMG},
];


// Bug constructor function
function Bug(x, y, type) {
    this.x = x;
    this.y = y;
    this.bugType = type ? type : BUG_TYPE[0];
    this.image = new Image();
    this.imageScale;
}

Bug.prototype.createNewBug = function(gameArea, playGround) {
    this.getRandomBug(playGround);
    this.drawBug(gameArea, playGround);
};

Bug.prototype.getRandomBug = function(playGround) {
    do {
        this.x = Math.floor(Math.random() * PLAYGROUND_COLUMNS);
        this.y = Math.floor(Math.random() * PLAYGROUND_ROWS);
        console.log(this.x, this.y);
    } while (playGround.grid[this.y][this.x] === 1);
    //this.bugType = BUG_TYPE[Math.floor(Math.random() * BUG_TYPE.length)];
    //console.log(this.x, this.y, this.bugType);
};

Bug.prototype.drawBug = function(gameArea, playGround) {
    //var context = myGameArea.context;
    //var image = new Image();
    /*this.image.src = this.bugType.image;
    this.image.onload = function() {
        gameArea.context.drawImage(
            this.image,
            this.x*playGround.cellSize + playGround.x,
            this.y*playGround.cellSize,
            playGround.cellSize,
            playGround.cellSize
        );
    }.bind(this);*/
    gameArea.context.fillStyle = this.bugType.image;
    gameArea.context.fillRect(
        this.x*playGround.cellSize + playGround.x,
        this.y*playGround.cellSize,
        playGround.cellSize,
        playGround.cellSize
    );
};
