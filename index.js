// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
}

// Adding common methods to the Vehicle prototype
Vehicle.prototype.accelerate = function () {
    this.speed += 5;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function (decrease) {
    this.speed -= 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.


// Car constructor function
function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Inherit from Vehicle
    Vehicle.apply(this, [brand, model, speed, fuelType]);

    // Additional property for Car
    this.numberOfWheels = numberOfWheels || 4;
}

// Inheriting methods from Vehicle
Car.prototype = Object.create(Vehicle.prototype);


// Adding an additional method for Car
Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking!`);
};




// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.


function Airplane(brand, model, speed, fuelType, numberOfEngines) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2
    this.hasLandingGear = this.hasLandingGear || true
}

Airplane.prototype = Object.create(Vehicle.prototype)

Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`)
}

let myAirplane = new Airplane("Honda", "HondaJet", 500, "Aviation fuel")
myAirplane.accelerate()
myAirplane.brake()
myAirplane.refuel()
myAirplane.takeOff()


let myCar = new Car("Honda", "Honda Civic Sedan", 100, "Gasoline")
myCar.accelerate()
myCar.brake()
myCar.refuel()
myCar.honk()










