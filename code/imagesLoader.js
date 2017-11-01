var allImages = {
    // Background image
    background : {
        //BACKGROUND_IMAGE_SRC : './images/board/background.jpg',
    },
    // PlayGround image
    playground : {
        PLAYGROUND_IMAGE_SRC : './images/board/playground.jpg',
    },
    // Snake images
    snake : {
        SNAKE_IMAGE_HEAD_UP : './images/snake/yellowHeadUp.png',
        SNAKE_IMAGE_HEAD_RIGHT : './images/snake/yellowHeadRight.png',
        SNAKE_IMAGE_HEAD_DOWN : './images/snake/yellowHeadDown.png',
        SNAKE_IMAGE_HEAD_LEFT : './images/snake/yellowHeadLeft.png',
        SNAKE_IMAGE_TAIL_UP : './images/snake/yellowTailUp.png',
        SNAKE_IMAGE_TAIL_RIGHT : './images/snake/yellowTailRight.png',
        SNAKE_IMAGE_TAIL_DOWN : './images/snake/yellowTailDown.png',
        SNAKE_IMAGE_TAIL_LEFT : './images/snake/yellowTailLeft.png',
        SNAKE_IMAGE_BODY_HORIZONTAL : './images/snake/yellowBodyHorizontal.png',
        SNAKE_IMAGE_BODY_VERTICAL : './images/snake/yellowBodyVertical.png',
        SNAKE_IMAGE_TURN_RIGHT_UP : './images/snake/yellowBodyRightUp.png',
        SNAKE_IMAGE_TURN_RIGHT_DOWN : './images/snake/yellowBodyRightDown.png',
        SNAKE_IMAGE_TURN_LEFT_UP : './images/snake/yellowBodyLeftUp.png',
        SNAKE_IMAGE_TURN_LEFT_DOWN : './images/snake/yellowBodyLeftDown.png',
    },
    // Bugs
    bug : {

    },
};

function imagesLoader(imagesPaths) {
    var imageObjects = {
        //background : {},
        //playground : {},
        //snake      : {},
        //bug        : {},
    };
    //Object.keys(imageObjects);
    var numberOfImages = 0;
    var numberOfLoadedImages = 0;

    var keys = Object.keys(imagesPaths);
    for (var type in keys) {
        for (var image in imagesPaths[keys[type]]) {
            numberOfImages++;
        }
    }
    console.log(numberOfImages);
    var keys = Object.keys(imagesPaths);
    //console.log(keys);
    for (var index in keys) {
        imageObjects[keys[index]] = {};
        for (var image in imagesPaths[keys[index]]) {
            console.log(Object.keys(imageObjects), image);
            imageObjects[keys[index]][image] = new Image();
            imageObjects[keys[index]][image].src = imagesPaths[keys[index]][image];
            console.log(imageObjects[keys[index]][image]);
            imageObjects[keys[index]][image].onload = function() {
                if (++numberOfLoadedImages >= numberOfImages) {
                    return imageObjects;
                }
            };
        }

    }

}

var images = imagesLoader(allImages);
console.log(Object.keys(images));
console.log(images[SNAKE_IMAGE_TURN_LEFT_DOWN]);
console.log('Carga de images completada!');
