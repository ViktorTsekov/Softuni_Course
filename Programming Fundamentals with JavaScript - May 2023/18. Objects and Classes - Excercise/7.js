function vehicle(type, model, parts, fuel) {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type
      this.model = model
      this.parts = parts
      this.parts["quality"] = this.parts.engine * this.parts.power
      this.fuel = fuel
    }

    drive(fuelLoss) {
      this.fuel -= fuelLoss
    }
  }

  let tempVehicle = new Vehicle(type, model, parts, fuel)

  tempVehicle.drive(100)
  console.log(tempVehicle.fuel)
  console.log(tempVehicle.parts.quality)
}

vehicle('a', 'b', { engine: 6, power: 100 }, 200)
