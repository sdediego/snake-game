// Define Bug Object constants
var BUG_TYPE = [
    {type : 'NEUTRAL_BUG',         image : new Image()},
    {type : 'BIG_MEAL_BUG',        image : new Image()},
    {type : 'BENJAMIN_BUTTON_BUG', image : new Image()},
    {type : 'SPEEDY_GONZALEZ_BUG', image : new Image()},
    {type : 'TORTOISE_BUG',        image : new Image()},
    {type : 'POISSON_BUG',         image : new Image()},
    {type : 'CRAB_BUG',            image : new Image()},
];


// Bug constructor function
function Bug(x, y, type) {
    this.x = x;
    this.y = y;
    this.bugType = type ? type : BUG_TYPE[0]['type'];
    this.image = new Image();
    this.imageScale;
    this.images = {};
}

Bug.prototype.createNewBug = function(gameArea, playGround) {
    this.getRandomBug(playGround);
    this.drawBug(gameArea, playGround);
};

Bug.prototype.getRandomBug = function(playGround) {
    do {
        this.x = Math.floor(Math.random() * PLAYGROUND_COLUMNS);
        this.y = Math.floor(Math.random() * PLAYGROUND_ROWS);
    } while (playGround.grid[this.y][this.x] === 1);
    do {
        var bug = BUG_TYPE[Math.floor(Math.random() * BUG_TYPE.length)];
    } while(this.bugType.type == bug.type);
    this.bugType = bug;
};

Bug.prototype.getImage = function(images) {
    var bugImages = images.bug;
    for (var i = 0; i < BUG_TYPE.length; i++) {
        var type = BUG_TYPE[i]['type'];
        BUG_TYPE[i]['image'] = bugImages[type];
    }
};

Bug.prototype.drawBug = function(gameArea, playGround) {
    gameArea.context.drawImage(
        this.bugType.image,
        this.x*playGround.cellSize + playGround.x,
        this.y*playGround.cellSize,
        playGround.cellSize,
        playGround.cellSize
    );
};
