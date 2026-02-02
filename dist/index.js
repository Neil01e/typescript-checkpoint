"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Porsche", "Cayenne Turbo GT", 2026);
myCar.start();
