function preload() {
    images.filenames.forEach(e => { 
        images.loaded[e] = loadImage(images.resDir + e);
    });
}

function setup() {
    game.defaults();
    var canvas = createCanvas(450, 450);
    canvas.parent(document.querySelector("#view"));
}

function draw() {
    background(0x000000)
    image(getImage("soil" + game.soilQuality + ".png"), 0, 0);
    if(game.currentPlant && game.plantStatus == 1){
        image(getImage(game.currentPlant + (game.currentPest?"-pest":"") + ".png"), 0, 0, 450, 450);
    }
    if(game.currentPest) {
        pests.coords.forEach((e) => {
            if(e.active) {
                image(getImage(game.currentPest + ".png"), e.x, e.y, 64, 64);
            }
        });
        if(game.currentAnimal) {
            image(getImage(game.currentAnimal + ".png"), mouseX - 32, mouseY -32, 64, 64)
        }
    }
}

function mouseClicked() {
    pests.coords.forEach((e, i) => {
        var x  = (
        mouseX > e.x &&
        mouseX < e.x + 64 &&
        mouseY > e.y &&
        mouseY < e.y + 64)
        if(
            x && game.currentAnimal
        ) {
            pests.coords[i].active = false;
            pests.active--;
            if(pests.active == 0) {
                game.currentPest = "";
                game.currentAnimal = "";
                info.updateInfo();
            }
        }
    });
}