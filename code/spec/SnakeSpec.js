describe("Snake", function() {
  var mySnake;
  var x = 25;
  var y = 25;
  var size = 5;

  beforeEach(function() {
    mySnake = new Snake(x, y, size);
  });

  describe("Snake constructor function", function() {
        it("should receive 3 arguments (x, y & size)", function() {
            expect(Snake.length).toEqual(3);
        });

        it("should receive the xHead property as its 1st argument", function() {
            expect(mySnake.xHead).toEqual(x);
        });

        it("should receive the yHead property as its 2nd argument", function() {
            expect(mySnake.yHead).toEqual(y);
        });

        it("should receive the size property as its 3rd argument", function() {
            expect(mySnake.size).toEqual(size);
        });

        it("should have the body property to be an array object", function() {
            expect(typeof(mySnake.body)).toEqual(typeof(new Array()));
        });

        it("should have the directions property to be an object", function() {
            expect(typeof(mySnake.directions)).toEqual('object');
        });

        it("should have the images property to be an object", function() {
            expect(typeof(mySnake.images)).toEqual('object');
        });
    });

    describe("startCreeping() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.startCreeping)).toBe("function");
        });

        it("should receive 3 arguments", function() {
            expect(mySnake.startCreeping.length).toEqual(3);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.startCreeping()).toEqual(undefined);
        });
    });

    describe("creep() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.creep)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(mySnake.creep.length).toEqual(1);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.creep()).toEqual(undefined);
        });
    });

    describe("getImage() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.getImage)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(mySnake.getImage.length).toEqual(1);
        });

        it("should return an undefined type of value", function() {
            var images = {
                snake : {},
            };
            expect(mySnake.getImage(images)).toEqual(undefined);
        });
    });

    describe("drawSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.drawSnake)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(mySnake.drawSnake.length).toEqual(2);
        });

        it("should return an undefined type of value", function() {
            var myGameArea = new GameArea();
            var myPlayGround = new PlayGround();
            expect(mySnake.drawSnake(myGameArea, myPlayGround)).toEqual(undefined);
        });
    });

    describe("moveUp() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.moveUp)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.moveUp.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.moveUp()).toEqual(undefined);
        });
    });

    describe("moveDown() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.moveDown)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.moveDown.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.moveDown()).toEqual(undefined);
        });
    });

    describe("moveRight() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.moveRight)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.moveRight.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.moveRight()).toEqual(undefined);
        });
    });

    describe("moveLeft() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.moveLeft)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.moveLeft.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.moveLeft()).toEqual(undefined);
        });
    });

    describe("hasEatenBug() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.hasEatenBug)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(mySnake.hasEatenBug.length).toEqual(1);
        });

        it("should return a boolean type of value", function() {
            var myBug = new Bug();
            expect(typeof(mySnake.hasEatenBug(myBug))).toEqual('boolean');
        });
    });

    describe("hasCrash() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.hasCrash)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(mySnake.hasCrash.length).toEqual(1);
        });

        it("should return a boolean type of value", function() {
            var myPlayGround = new PlayGround();
            expect(typeof(mySnake.hasCrash(myPlayGround))).toEqual('boolean');
        });
    });

    describe("setSnakeState() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.setSnakeState)).toBe("function");
        });

        it("should receive 2 arguments", function() {
            expect(mySnake.setSnakeState.length).toEqual(2);
        });

        it("should return an undefined type of value", function() {
            var speed = 1;
            var status = 'cool';
            expect(mySnake.setSnakeState(speed, status)).toEqual(undefined);
        });
    });

    describe("growSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.growSnake)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(mySnake.growSnake.length).toEqual(1);
        });

        it("should return an undefined type of value", function() {
            var status = 'cool';
            expect(mySnake.growSnake(status)).toEqual(undefined);
        });
    });

    describe("backToChildhood() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.backToChildhood)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.backToChildhood.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.backToChildhood()).toEqual(undefined);
        });
    });

    describe("speedyGonzalez() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.speedyGonzalez)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.speedyGonzalez.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.speedyGonzalez()).toEqual(undefined);
        });
    });

    describe("toTortoise() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.toTortoise)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.toTortoise.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.toTortoise()).toEqual(undefined);
        });
    });

    describe("reverseDirection() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.reverseDirection)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.reverseDirection.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.reverseDirection()).toEqual(undefined);
        });
    });

    describe("onDrugs() method", function() {
        it("should be a function", function() {
            expect(typeof(mySnake.onDrugs)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(mySnake.onDrugs.length).toEqual(0);
        });

        it("should return an undefined type of value", function() {
            expect(mySnake.onDrugs()).toEqual(undefined);
        });
    });
});
