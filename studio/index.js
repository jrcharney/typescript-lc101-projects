"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * [x] Code the Astronaut, Cargo, and Rocket classes in new files.
// * [x] Import the three classes into this file.
var Astronaut_1 = require("./Astronaut");
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var falcon9 = new Rocket_1.Rocket('Falcon 9', 7500);
var astronauts = [
    new Astronaut_1.Astronaut(75, 'Mae'),
    new Astronaut_1.Astronaut(81, 'Sally'),
    new Astronaut_1.Astronaut(99, 'Charles')
];
for (var i = 0; i < astronauts.length; i++) {
    var astronaut = astronauts[i];
    var status_1 = falcon9.addAstronaut(astronaut) ? "On board" : "No on board";
    console.log(astronaut.name + ": " + status_1);
}
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster")
];
for (var i = 0; i < cargo.length; i++) {
    var item = cargo[i];
    var loaded = falcon9.addCargo(item) ? "Loaded" : "Not loaded";
    console.log(item.material + ": " + loaded);
}
console.log("Final cargo and astronaut mass: " + falcon9.currentMassKg() + " kg.");
// Compile and run!
// Note: If we compile index.ts, it will also compile the other .ts files it depends on, automatically.
// tsc index.ts
// node index.js
