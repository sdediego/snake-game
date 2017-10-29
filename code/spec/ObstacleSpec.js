describe("Obstacle", function() {
  var obstacle;
  var x = 25;
  var y = 25;

  beforeEach(function() {
    obstacle = new Obstacle(x, y);
    obstacle.imageScale = 0.5;
  });

  describe("Obstacle constructor function", function() {
        it("should receive 2 arguments (x & y)", function() {
            expect(Obstacle.length).toEqual(2);
        });

        it("should receive the x property as its 1st argument", function() {
            expect(obstacle.x).toEqual(x);
        });

        it("should receive the y property as its 2nd argument", function() {
            expect(obstacle.y).toEqual(y);
        });

        it("should have the x property to be a number type of value", function() {
            expect(typeof(obstacle.x)).toEqual('number');
        });

        it("should have the y property to be a number type of value", function() {
            expect(typeof(obstacle.y)).toEqual('number');
        });

        it("should have the imageScale property to be a number type of value", function() {
            expect(typeof(obstacle.imageScale)).toEqual('number');
        });
    });

    describe("setObstacleImage() method", function() {
        it("should be a function", function() {
            expect(typeof(obstacle.setObstacleImage)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(obstacle.setObstacleImage.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            var myGameArea = document.createElement('canvas');
            var obstacleImage = './../images/obstacle/obstacle.png';
            expect(obstacle.setObstacleImage(myGameArea, obstacleImage)).toBe(undefined);
        });
    });
});
