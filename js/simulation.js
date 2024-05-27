import Population from "./population.js";
import population from "./population.js";

var paused = false;
var out = document.querySelector("#beetle");
var dt = 20;


document.querySelector("#pause").addEventListener("click", () => paused = !paused);

beetle = new Population(1, 0.2, "Beetle");

setInterval(() => {
    if(paused == false) {
        beetle.iterate();
        out.innerText = beetle.name + ": " + beetle.p;
    }
}, 20);