describe("GameArea", function() {
  var myGameArea;
  var playGround;
  var scoreBoard;
  var points = 10;
  var state = 'cool';

  beforeEach(function() {
    myGameArea = new GameArea();
    playGround = new PlayGround();
    scoreBoard = new ScoreBoard(playGround, points, state);
  });

  describe("GameArea constructor function", function() {
        it("should receive 0 arguments", function() {
            expect(myGameArea.length).toEqual(0);
        });

        it("should have the width property to be a number type of value", function() {
            expect(typeof(myGameArea.width)).toEqual('number');
        });

        it("should have the height property to be a number type of value", function() {
            expect(typeof(myGameArea.height)).toEqual('number');
        });
    });

    describe("update() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.update)).toBe("function");
        });

        it("should receive 2 argument", function() {
            expect(myGameArea.update.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myGameArea.update(playGround, scoreBoard)).toBe(undefined);
        });
    });

    describe("init() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.init)).toBe("function");
        });

        it("should receive 3 argument", function() {
            expect(myGameArea.init.length).toEqual(3);
        });

        it("should return undefined (no returning variable)", function() {
            var updateFunction = function() {return; };
            expect(myGameArea.init(playGround, scoreBoard, updateFunction)).toBe(undefined);
        });
    });

    describe("stop() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.stop)).toBe("function");
        });

        it("should receive 0 argument", function() {
            expect(myGameArea.stop.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            var updateFunction = function() {return; };
            expect(myGameArea.stop()).toBe(undefined);
        });
    });

    describe("clear() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.clear)).toBe("function");
        });

        it("should receive 0 argument", function() {
            expect(myGameArea.clear.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            var updateFunction = function() {return; };
            expect(myGameArea.clear()).toBe(undefined);
        });
    });

    describe("PlayGround constructor function", function() {
          it("should receive 0 arguments", function() {
              expect(playGround.length).toEqual(0);
          });

          it("should have the x property to be a number type of value", function() {
              expect(typeof(playGround.x)).toEqual('number');
          });

          it("should have the y property to be a number type of value", function() {
              expect(typeof(playGround.y)).toEqual('number');
          });

          it("should have the width property to be a number type of value", function() {
              expect(typeof(playGround.width)).toEqual('number');
          });

          it("should have the height property to be a number type of value", function() {
              expect(typeof(playGround.height)).toEqual('number');
          });
      });

    describe("setBackgroundImage() method", function() {
        it("should be a function", function() {
            expect(typeof(playGround.setBackgroundImage)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(playGround.setBackgroundImage.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            expect(playGround.setBackgroundImage()).toBe(undefined);
        });
    });

    describe("ScoreBoard constructor function", function() {
          it("should receive 3 arguments", function() {
              expect(scoreBoard.length).toEqual(3);
          });

          it("should have the x property to be a number type of value", function() {
              expect(typeof(scoreBoard.x)).toEqual('number');
          });

          it("should have the y property to be a number type of value", function() {
              expect(typeof(scoreBoard.y)).toEqual('number');
          });

          it("should have the width property to be a number type of value", function() {
              expect(typeof(scoreBoard.width)).toEqual('number');
          });

          it("should have the height property to be a number type of value", function() {
              expect(typeof(scoreBoard.height)).toEqual('number');
          });

          it("should have the points property to be a number type of value", function() {
              expect(typeof(scoreBoard.points)).toEqual('number');
          });

          it("should have the state property to be a string type of value", function() {
              expect(typeof(scoreBoard.state)).toEqual('string');
          });
      });

    describe("setScoreBoard() method", function() {
        it("should be a function", function() {
            expect(typeof(scoreBoard.setScoreBoard)).toBe("function");
        });

        it("should receive 2 argument", function() {
            expect(scoreBoard.setScoreBoard.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            expect(scoreBoard.setScoreBoard(gameArea, playGround)).toBe(undefined);
        });
    });
});
