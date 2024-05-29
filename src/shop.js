var shop = {
    plants: {
        "ryegrass": {
            growthTime: 5,
            replaces: "N/A",
            soilQuality: 0,
            e: null,
            btn: null,
            owned: false
        },
        "peas": {
            growthTime: 10,
            replaces: "ryegrass",
            soilQuality: 1,
            e: null,
            btn: null,
            owned: false
        },
        "potatoes": {
            growthTime: 20,
            replaces: "ryegrass",
            soilQuality: 2,
            e: null,
            btn: null,
            owned: false
        }
    },
    animals: {
        "spiders": {
            eats: "ants",
            predation: 1,
            plant: "ryegrass",
            e: null,
            btn: null,
            owned: false
        },
        "ducks": {
            eats: "snails",
            predation: 1,
            plant: "peas",
            e: null,
            btn: null,
            owned: false
        },
        "wolves": {
            eats: "deer",
            predation: 1,
            plant: "potatoes",
            e: null,
            btn: null,
            owned: false
        }
    },
    buildPlantShop() {
        game.e.items.innerHTML = "";
        Object.keys(this.plants).forEach(e => {
            let tile = document.createElement("div");
            let title = document.createElement("b");
            let growthTime = document.createElement("span");
            let replaces = document.createElement("span");
            let btn = document.createElement("button");
            let soilQuality = document.createElement("span");
            tile.className = "shop-item";
            title.innerText = e;
            growthTime.innerText = "growth time: " + this.plants[e].growthTime;
            replaces.innerText = "replaces: " + this.plants[e].replaces;
            soilQuality.innerText = "min. soil quality: " + ["poor", "good", "great"][this.plants[e].soilQuality]
            btn.innerText = "plant";
            tile.appendChild(title);
            tile.innerHTML += "<br>";
            tile.appendChild(growthTime);
            tile.innerHTML += "<br>";
            tile.appendChild(replaces);
            tile.innerHTML += "<br>";
            tile.appendChild(soilQuality);
            tile.innerHTML += "<br><br>";
            tile.appendChild(btn);
            game.e.items.appendChild(tile);
            this.plants[e].btn = btn;
            this.plants[e].e = tile;
        });
        game.updateShopTiles();
    },
    buildAnimalShop() {
        Object.keys(this.animals).forEach(e => {
            let tile = document.createElement("div");
            let title = document.createElement("b");
            let eats = document.createElement("span");
            let predation = document.createElement("span");
            let btn = document.createElement("button");
            tile.className = "shop-item";
            title.innerText = e;
            eats.innerText = "eats: " + this.animals[e].eats;
            predation.innerText = "predation rate: " + this.animals[e].predation;
            btn.innerText = "use";
            tile.appendChild(title);
            tile.innerHTML += "<br>";
            tile.appendChild(eats);
            tile.innerHTML += "<br><br>";
            tile.appendChild(btn);
            this.animals[e].btn = btn;
            this.animals[e].e = tile;
        });
        game.updateShopTiles();
    },
    addAnimalShop(){
        game.e.items.innerHTML = "";
        Object.keys(this.animals).forEach(e => {
            game.e.items.appendChild(this.animals[e].e);
        });
    },
    addPlantShop(){
        game.e.items.innerHTML = "";
        Object.keys(this.plants).forEach(e => {
            game.e.items.appendChild(this.plants[e].e);
        });
    }
}