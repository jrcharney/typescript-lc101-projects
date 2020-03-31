// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * [x] Code the Astronaut, Cargo, and Rocket classes in new files.
// * [x] Import the three classes into this file.
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Rocket } from "./Rocket";

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
    new Astronaut(75, 'Mae'),
    new Astronaut(81, 'Sally'),
    new Astronaut(99, 'Charles')
];

for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status = falcon9.addAstronaut(astronaut) ? "On board" : "No on board";
    console.log(`${astronaut.name}: ${status}`);
}

let cargo : Cargo[] = [
    new Cargo(3107.39, "Satellite"),
    new Cargo(1000.39, "Space Probe"),
    new Cargo(753, "Water"),
    new Cargo(541, "Food"),
    new Cargo(2107.39, "Tesla Roadster")
];

for (let i = 0; i < cargo.length; i++) {
    let item = cargo[i];
    let loaded = falcon9.addCargo(item) ? "Loaded" : "Not loaded";
    console.log(`${item.material}: ${loaded}`);
}

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);
// Compile and run!
// Note: If we compile index.ts, it will also compile the other .ts files it depends on, automatically.
// tsc index.ts
// node index.js