import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] = [];      // For some reason, I need to add "= []" after declaring an array?
    astronauts : Astronaut[] = [];
    constructor(name : string, totalCapacityKg : number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items : Payload[] ) : number {
        let payloadMassKg : number = 0;
        for (let i = 0; i < items.length; i++) {
            payloadMassKg += items[i].massKg;
        }
        return payloadMassKg;
    }
    currentMassKg() : number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item : Payload) : boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo : Cargo) : boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo)
            return true;
        }
        return false;
    }
    addAstronaut(astronaut : Astronaut) {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}