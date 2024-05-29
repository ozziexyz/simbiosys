var game = {
    time: 0,
    e : {
        plantTab: document.querySelector("#plant-tab"),
        animalTab: document.querySelector("#animal-tab"),
        items: document.querySelector("#items"),
        plantItems: document.querySelector("#plant-items"),
        animalItems: document.querySelector("#animal-items"),
        info: document.querySelector("#info")
    },
    soilQuality: 0,
    shopTab: "plants",
    currentPlant: "",
    currentPest: "",
    currentAnimal: "",
    pestTime: null,
    plantStatus: 2,
    pestDelay: 0,
    setShopTab(tab) {
        this.shopTab = tab;
        switch (this.shopTab) {
            case "plants":
                this.e.animalTab.style.borderBottom = "1px solid black";
                this.e.plantTab.style.borderBottom = "3px solid green";
                shop.addPlantShop();
                break;
            case "animals":
                this.e.animalTab.style.borderBottom = "3px solid green";
                this.e.plantTab.style.borderBottom = "1px solid black";
                shop.addAnimalShop();
                break;
        }
        this.updateShopTiles();
    },
    defaults() {
        this.time = 0;
        shop.buildPlantShop();
        shop.buildAnimalShop();
        this.setShopTab("plants");
        info.buildInfo();
        registerInputs();
        setInterval(() => {
            this.time++;
            this.periodic();
        }, 1000);
        this.periodic();
        this.soilQuality = 0;
    },
    periodic() {
        this.updateShopTiles();
        info.updateInfo();
        if(this.time == this.pestTime) {
            this.addPests();
        }
        if(this.currentPest) {
            this.pestDelay++;
        }
        if(
            this.currentPlant &&
            (this.time >= shop.plants[this.currentPlant].planted + shop.plants[this.currentPlant].growthTime) && 
            this.plantStatus == 0
        ) {
            this.plantStatus++;
        }
        if(
            this.currentPlant &&
            this.soilQuality < shop.plants[this.currentPlant].soilQuality + 1 && 
            this.soilQuality < 2 && 
            (this.time >= shop.plants[this.currentPlant].planted + this.pestDelay + (shop.plants[this.currentPlant].growthTime * 2)) && 
            this.plantStatus == 1
        ) {
            this.soilQuality++;
        }
        info.updateInfo();
        this.updateShopTiles();
    },
    buyPlant(name) {
        shop.plants[name].owned = true;
        shop.plants[name].planted = this.time;
        this.currentPlant = name;
        this.plantStatus = 0;
        this.pestTime = shop.plants[this.currentPlant].planted + shop.plants[this.currentPlant].growthTime + Math.floor(Math.random() * shop.plants[this.currentPlant].growthTime);
        this.updateShopTiles();
        this.applyTileOverlay(name);
    },
    useAnimal(name) {
        shop.animals[name].owned = true;
        this.currentAnimal = name;
        this.updateShopTiles();
    },
    updateShopTiles() {
        Object.keys(shop[this.shopTab]).forEach(e => {
            if(
                shop[this.shopTab][e].soilQuality > this.soilQuality || 
                shop[this.shopTab][e].owned || 
                (this.shopTab == "animals" && shop[this.shopTab][e].plant != this.currentPlant) 
            )
            {
                shop[this.shopTab][e].e.style.opacity = 0.5;
                shop[this.shopTab][e].e.style.cursor = "not-allowed";
                shop[this.shopTab][e].btn.disabled = true;
            }
            else{
                shop[this.shopTab][e].e.style.opacity = 1;
                shop[this.shopTab][e].e.style.cursor = "pointer";
                shop[this.shopTab][e].btn.disabled = false;
            }
        });
    },
    applyTileOverlay(name) {
        var overlay = document.createElement("div");
        overlay.className = "item-overlay";
        overlay.innerHTML = String.fromCodePoint(0x2705);
        shop[this.shopTab][name].e.appendChild(overlay);
    },
    addPests() {
        this.currentPest = this.currentPest = pests.list[this.soilQuality];
        this.pestDelay = 0;
        pests.active = 4;
        pests.coords = [];
        for(let i = 0; i < 4; i++) {
            pests.coords.push({
                x: 75 + Math.floor(Math.random() * 300), 
                y: 75 + Math.floor(Math.random() * 300), 
                active: true
            });
        }
    }
}