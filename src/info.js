var info = {
    buildInfo() {
        this.e = {};
        this.e.time = document.createElement("div");
        this.e.soilQuality = document.createElement("div");
        this.e.currentPlant = document.createElement("div");
        this.e.plantStatus = document.createElement("div");
        this.e.pest = document.createElement("div");

        Object.keys(this.e).forEach(i => {
            this.e[i].className = "info-item";
            game.e.info.appendChild(this.e[i]);
        });

        this.updateInfo();
    },
    updateInfo() {
        this.e.time.innerText = "Time: " + game.time;
        this.e.soilQuality.innerText = "Soil Quality: " + ["poor", "good", "great"][game.soilQuality];
        this.e.currentPlant.innerText = "Current Plant: " + (game.currentPlant?game.currentPlant:"none");
        this.e.plantStatus.innerText = "Plant Status: " + ["growing...", "grown", "none"][game.plantStatus];
        this.e.pest.innerText = "Pest: " + (game.currentPest?game.currentPest:"none");
    }
}