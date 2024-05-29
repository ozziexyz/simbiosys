var images = {
    resDir: "res/",
    filenames: ["soil0.png", 
                "soil1.png", 
                "soil2.png", 
                "ryegrass.png", 
                "peas.png", 
                "potatoes.png", 
                "ants.png", 
                "ryegrass-pest.png",
                "peas-pest.png",
                "potatoes-pest.png",
                "spiders.png",
                "ducks.png",
                "snails.png",
                "wolves.png",
                "deer.png"
            ],
    loaded: {} 
}

function getImage(file) {
    return images.loaded[file];
}