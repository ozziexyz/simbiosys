buttonMap = {
    "#plant-tab": () => {
        game.setShopTab("plants");
    },
    "#animal-tab": () => {
        game.setShopTab("animals");
    },
}

function registerInputs() {
    Object.keys(buttonMap).forEach(e => {
        document.querySelector(e).addEventListener("click", () => {
            buttonMap[e]();
        });
    });

    Object.keys(shop.plants).forEach(e => {
        shop.plants[e].btn.addEventListener("click", () => {
            game.buyPlant(e);
        });
    });

    Object.keys(shop.animals).forEach(e => {
        shop.animals[e].btn.addEventListener("click", () => {
            game.useAnimal(e);
        });
    });
}