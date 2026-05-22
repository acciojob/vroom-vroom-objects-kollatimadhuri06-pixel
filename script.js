// Complete the js code

function Car(make, model) {

	this.make = make
	this.model = model
	
}


// Parent method
Car.prototype.getMakeModel = function(){

	return `${this.make} ${this.model}`
	
}


// Child constructor
function SportsCar(make, model, topSpeed) {

	Car.call(this, make, model)

	this.topSpeed = topSpeed
}


// Inheritance
SportsCar.prototype = Object.create(Car.prototype)

SportsCar.prototype.constructor = SportsCar;


// Child method
SportsCar.prototype.getTopSpeed = function(){

	return this.topSpeed

}


// Create object
const car = new SportsCar("Ferrari", "Testarossa", 200)

console.log(car.getMakeModel())

console.log(car.getTopSpeed())


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
