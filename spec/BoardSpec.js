describe("GameArea", function() {
    var myGameArea;
    var myPlayGround;
    var myScoreBoard;
    var points = 10;
    var state = 'cool';

    beforeEach(function() {
        myGameArea = new GameArea();
        myPlayGround = new PlayGround();
        myScoreBoard = new ScoreBoard(myPlayGround, points, state);
    
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

        it("should have the frames property to be a number type of value", function() {
            expect(typeof(myGameArea.frames)).toEqual('number');
        });

        it("should have the background property to be a number type of value", function() {
            expect(typeof(myGameArea.background)).toEqual('object');
        });

        it("should have the endGame property to be a number type of value", function() {
            expect(typeof(myGameArea.endGame)).toEqual('object');
        });
    });

    describe("getImage() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.getImage)).toBe("function");
        });

        it("should receive 1 argument", function() {
            expect(myGameArea.getImage.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            var images = new Image();
            images = {
                background : { BACKGROUND_IMAGE : './../images/board/background.jpg' },
                gameover : { GAME_OVER : './../images/board/gameover.png' },
            };
            expect(myGameArea.getImage(myPlayGround, myScoreBoard)).toBe(undefined);
        });
    });

    describe("setBackgroundImage() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.setBackgroundImage)).toBe("function");
        });

        it("should receive 0 argument", function() {
            expect(myGameArea.setBackgroundImage.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myGameArea.setBackgroundImage()).toBe(undefined);
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
            expect(myGameArea.update(myPlayGround, myScoreBoard)).toBe(undefined);
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
            var updateFunction = function() { return; };
            expect(myGameArea.init(myPlayGround, myScoreBoard, updateFunction)).toBe(undefined);
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
            expect(myGameArea.clear()).toBe(undefined);
        });
    });

    describe("dieSnake() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.dieSnake)).toBe("function");
        });

        it("should receive 0 argument", function() {
            expect(myGameArea.dieSnake.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myGameArea.dieSnake()).toBe(undefined);
        });
    });

    describe("setHighestScore() method", function() {
        it("should be a function", function() {
            expect(typeof(myGameArea.setHighestScore)).toBe("function");
        });

        it("should receive 1 argument", function() {
            expect(myGameArea.setHighestScore.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myGameArea.setHighestScore()).toBe(undefined);
        });
    });

    describe("PlayGround constructor function", function() {
        it("should receive 0 arguments", function() {
            expect(myPlayGround.length).toEqual(0);
        });

        it("should have the x property to be a number type of value", function() {
            expect(typeof(myPlayGround.x)).toEqual('number');
        });

        it("should have the y property to be a number type of value", function() {
            expect(typeof(myPlayGround.y)).toEqual('number');
        });

        it("should have the width property to be a number type of value", function() {
            expect(typeof(myPlayGround.width)).toEqual('number');
        });

        it("should have the height property to be a number type of value", function() {
            expect(typeof(myPlayGround.height)).toEqual('number');
        });

        it("should have the rows property to be a number type of value", function() {
            expect(typeof(myPlayGround.rows)).toEqual('number');
        });

        it("should have the columns property to be a number type of value", function() {
            expect(typeof(myPlayGround.columns)).toEqual('number');
        });

        it("should have the cellSize property to be a number type of value", function() {
            expect(typeof(myPlayGround.cellSize)).toEqual('number');
        });

        it("should have the grid property to be a number type of value", function() {
            expect(typeof(myPlayGround.grid)).toEqual('object');
        });

        it("should have the image property to be a number type of value", function() {
            expect(typeof(myPlayGround.image)).toEqual('object');
        });
    });

    describe("getImage() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.getImage)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(myPlayGround.getImage.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            var images = new Image();
            images = {
                playground : { PLAYGROUND_IMAGE : './../images/board/playground.jpg' },
            };
            expect(myPlayGround.getImage(images)).toBe(undefined);
        });
    });

    describe("setPlayGroundImage() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.setPlayGroundImage)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(myPlayGround.setPlayGroundImage.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myPlayGround.setPlayGroundImage(myGameArea)).toBe(undefined);
        });
    });

    describe("setPlayGroundGrid() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.setPlayGroundGrid)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(myPlayGround.setPlayGroundGrid.length).toEqual(0);
        });

        it("should return a 2 dimension array object", function() {
            expect(typeof(myPlayGround.setPlayGroundGrid())).toBe('object');
        });
    });

    describe("toZeroPlayGroundGrid() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.toZeroPlayGroundGrid)).toBe("function");
        });

        it("should receive 0 arguments", function() {
            expect(myPlayGround.toZeroPlayGroundGrid.length).toEqual(0);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myPlayGround.toZeroPlayGroundGrid()).toBe(undefined);
        });
    });

    describe("updateGridValues() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.updateGridValues)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(myPlayGround.updateGridValues.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            var myBug = new Bug();
            expect(myPlayGround.updateGridValues(myBug)).toBe(undefined);
        });
    });

    describe("drawGrid() method", function() {
        it("should be a function", function() {
            expect(typeof(myPlayGround.drawGrid)).toBe("function");
        });

        it("should receive 1 arguments", function() {
            expect(myPlayGround.drawGrid.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myPlayGround.drawGrid(myGameArea)).toBe(undefined);
        });
    });

    describe("ScoreBoard constructor function", function() {
        it("should receive 3 arguments", function() {
            expect(myScoreBoard.length).toEqual(3);
        });

        it("should have the x property to be a number type of value", function() {
            expect(typeof(myScoreBoard.x)).toEqual('number');
        });

        it("should have the y property to be a number type of value", function() {
            expect(typeof(myScoreBoard.y)).toEqual('number');
        });

        it("should have the width property to be a number type of value", function() {
            expect(typeof(myScoreBoard.width)).toEqual('number');
        });

        it("should have the height property to be a number type of value", function() {
            expect(typeof(myScoreBoard.height)).toEqual('number');
        });

        it("should have the points property to be a number type of value", function() {
            expect(typeof(myScoreBoard.points)).toEqual('number');
        });

        it("should have the status property to be a string type of value", function() {
            expect(typeof(myScoreBoard.status)).toEqual('string');
        });
    });

    describe("update() method", function() {
        it("should be a function", function() {
            expect(typeof(myScoreBoard.update)).toBe("function");
        });

        it("should receive 2 argument", function() {
            expect(myScoreBoard.update.length).toEqual(2);
        });

        it("should return undefined (no returning variable)", function() {
            var points = 1;
            var status = 'cool';
            expect(myScoreBoard.update(points, status)).toBe(undefined);
        });
    });

    describe("setScoreBoard() method", function() {
        it("should be a function", function() {
            expect(typeof(myScoreBoard.setScoreBoard)).toBe("function");
        });

        it("should receive 1 argument", function() {
            expect(myScoreBoard.setScoreBoard.length).toEqual(1);
        });

        it("should return undefined (no returning variable)", function() {
            expect(myScoreBoard.setScoreBoard(myGameArea)).toBe(undefined);
        });
    });
});
