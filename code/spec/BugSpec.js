describe("Bug", function() {
  var bug;
  var x = 25;
  var y = 25;
  var type = {type: 'NEUTRAL_BUG', image: new Image()};

  beforeEach(function() {
    bug = new Bug(x, y, type);
  });

  describe("Bug constructor function", function() {
        it("should receive 3 arguments (x, y & type)", function() {
            expect(Bug.length).toEqual(3);
        });

        it("should receive the x property as its 1st argument", function() {
            expect(bug.x).toEqual(x);
        });

        it("should receive the y property as its 2nd argument", function() {
            expect(bug.y).toEqual(y);
        });

        it("should receive the type property as its 3rd argument", function() {
            expect(bug.bugType).toEqual(type);
        });

        it("should have the x property to be a number type of value", function() {
            expect(typeof(bug.x)).toEqual('number');
        });

        it("should have the y property to be a number type of value", function() {
            expect(typeof(bug.y)).toEqual('number');
        });

        it("should have the type property to be a object type of value", function() {
            expect(typeof(bug.bugType)).toEqual('object');
        });

        it("should have the image property to be a object type of value", function() {
            expect(typeof(bug.image)).toEqual('object');
        });

        it("should have the images property to be a object type of value", function() {
            expect(typeof(bug.images)).toEqual('object');
        });
    });

    describe("getImage() method", function() {
        it("should be a function", function() {
            expect(typeof(bug.getImage)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(bug.getImage.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            var images = {bug: {type: 'NEUTRAL_BUG', image: new Image()}};
            expect(bug.getImage(images)).toBe(undefined);
        });
    });

    describe("getRandomBug() method", function() {
        it("should be a function", function() {
            expect(typeof(bug.getRandomBug)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(bug.getRandomBug.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            var playGround = new PlayGround();
            expect(bug.getRandomBug(playGround)).toBe(undefined);
        });
    });

    describe("drawBug() method", function() {
        it("should be a function", function() {
            expect(typeof(bug.drawBug)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(bug.drawBug.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            var gameArea = new GameArea();
            var playGround = new PlayGround();
            expect(bug.drawBug(gameArea, playGround)).toBe(undefined);
        });
    });

    describe("createNewBug() method", function() {
        it("should be a function", function() {
            expect(typeof(bug.createNewBug)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(bug.createNewBug.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            var gameArea = new GameArea();
            var playGround = new PlayGround();
            expect(bug.createNewBug(gameArea, playGround)).toBe(undefined);
        });
    });
});
