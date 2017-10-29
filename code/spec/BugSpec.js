describe("Bug", function() {
  var bug;
  var x = 25;
  var y = 25;
  var type = NEUTRAL_BUG;

  beforeEach(function() {
    bug = new Bug(x, y, type);
    bug.imageScale = 0.5;
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
            expect(bug.type).toEqual(type);
        });

        it("should have the x property to be a number type of value", function() {
            expect(typeof(bug.x)).toEqual('number');
        });

        it("should have the y property to be a number type of value", function() {
            expect(typeof(bug.y)).toEqual('number');
        });

        it("should have the type property to be a string type of value", function() {
            expect(typeof(bug.type)).toEqual('string');
        });

        it("should have the imageScale property to be a number type of value", function() {
            expect(typeof(bug.imageScale)).toEqual('number');
        });
    });

    describe("setBugImage() method", function() {
        it("should be a function", function() {
            expect(typeof(bug.setBugImage)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(bug.setBugImage.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            var myGameArea = document.createElement('canvas');
            var bugImage = './../images/bug/bug.png';
            expect(bug.setBugImage(myGameArea, bugImage)).toBe(undefined);
        });
    });
});
