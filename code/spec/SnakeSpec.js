describe("Snake", function() {
  var snake;
  var x = 25;
  var y = 25;
  var direction = 'right';
  var speed = 1;
  var status = 'cool';

  beforeEach(function() {
    snake = new Snake(x, y, direction, speed);
    snake.status = status;
  });

  describe("Snake constructor function", function() {
        it("should receive 4 arguments (x, y, direction & speed)", function() {
            expect(Snake.length).toEqual(4);
        });

        it("should receive the xHead property as its 1st argument", function() {
            expect(snake.xHead).toEqual(x);
        });

        it("should receive the yHead property as its 2nd argument", function() {
            expect(snake.yHead).toEqual(y);
        });

        it("should receive the direction property as its 3rd argument", function() {
            expect(snake.direction).toEqual(direction);
        });

        it("should receive the speed property as its 4th argument", function() {
            expect(snake.speed).toEqual(speed);
        });

        it("should have the body property to be an array object", function() {
            expect(typeof(snake.body)).toEqual(typeof(new Array()));
        });

        it("should have the status property to be a string", function() {
            expect(typeof(snake.status)).toEqual('string');
        });
    });

    describe("hasEatenBug() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.hasEatenBug)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.hasEatenBug.length).toEqual(0);
        });

        it("should return a boolean type of value", function() {
            expect(typeof(snake.hasEatenBug())).toEqual('boolean');
        });
    });

    describe("checkColision() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.checkColision)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.checkColision.length).toEqual(0);
        });

        it("should return a boolean type of value", function() {
            expect(typeof(snake.checkColision())).toEqual('boolean');
        });
    });

    describe("growSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.growSnake)).toBe("function");
        });

    });

    describe("backToChildhood() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.backToChildhood)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.backToChildhood.length).toEqual(0);
        });

    });

    describe("speedyGonzalez() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.speedyGonzalez)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.speedyGonzalez.length).toEqual(0);
        });

    });

    describe("toTortoise() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.toTortoise)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.toTortoise.length).toEqual(0);
        });

    });

    describe("reverseDirection() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.reverseDirection)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.reverseDirection.length).toEqual(0);
        });

    });

    describe("onDrugs() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.onDrugs)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.onDrugs.length).toEqual(0);
        });

    });

    describe("invokeAlterEgoSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.invokeAlterEgoSnake)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.invokeAlterEgoSnake.length).toEqual(0);
        });

    });

    describe("dieSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(snake.dieSnake)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(snake.dieSnake.length).toEqual(0);
        });

    });
});
