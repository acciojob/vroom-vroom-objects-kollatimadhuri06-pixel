// Complete the js code
function Car(make, model) {
	this.make = make
	this.model = model
	
}
Car.prototype.getMakeModel = function(){
	return `${this.make} ${this.model}`
	
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model)
	this.topspeed = topSpeed
}
SportsCar.prototype = Object.create(Car.prototype)
Sportscar.prototype.constructor = Sportscar;

SportsCar.prototype.getTopSpeed = function {
	return topSpeed
}
const car = new Sportscar("Ferrari","Testarossa",200)
 console.log(car.getMakeModel())
 console.log(car.getTopSpeed())
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
