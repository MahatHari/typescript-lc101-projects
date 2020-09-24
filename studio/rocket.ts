import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";

export class Rocket implements Payload {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  massKg: number;

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sum: number = 0;
    items.forEach((item) => {
      sum += item.massKg;
    });
    /*  for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    } */
    return sum;
  }
  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }
  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }
}
