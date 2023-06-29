class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getDetails() {
        console.log(`Driving ${this.make} ${this.model} ${this.year}  ${this.seats}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numDoors) {
        super(make, model, year, color);
        this.numDoors = numDoors;
    }
}
Car.prototype.getDetails = function () {
    console.log(`Driving ${this.make} ${this.model} ${this.year} ${this.numDoors}`);
};


const vehicle = new Vehicle('AD2', '2.3', '1996', 'black');
const car = new Car('BD2', '3.3', '1995', 'black','4');

vehicle.getDetails();
car.getDetails();

Object.defineProperty(vehicle, 'seats', {
    value: '11',
    writable: false,
    enumerable: true,
    configurable: true
});

vehicle.seats = '5'; 
vehicle.getDetails();

console.log(vehicle.seats); 
