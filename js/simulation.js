import Population from "./population.js";
import population from "./population.js";

var paused = false;
var out = document.querySelector("#beetle");
var dt = 0.2;
var t = 0;

document.querySelector("#pause").addEventListener("click", () => paused = !paused);

beetle = new Population(1, 125, 100, "Beetle");

setInterval(() => {
    t = Math.floor((t + dt) * 10)/10;
    if(paused == false) {
        beetle.iterate(dt);
        out.innerText = beetle.name + ": " + beetle.pop;
        document.getElementById("time").innerHTML = "time: " + t + " years <br>";
    }
}, 1000 * dt);