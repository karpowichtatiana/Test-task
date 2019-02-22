"use strict";

function Farm(){
	
}
Farm.prototype.process = function(animal){
	if(typeof animal === "object"){
			return animal.produce();
		} else{
			throw Error(animal + " is not an animal");
		}
}
function Animal(){
	
}
Animal.prototype.produce = function(){
	return (new Food());
}
function Chicken(){
	Animal.apply(this, arguments);
}
Chicken.prototype = Object.create(Animal.prototype);
Chicken.prototype.constructor = Chicken;
Chicken.prototype.produce = function(){
	return (new Egg());
}
function Cow(){
	Animal.apply(this, arguments);
}
Cow.prototype = Object.create(Animal.prototype);
Cow.prototype.constructor = Cow;
Cow.prototype.produce = function(){
	return (new Milk());
}
function Food(){
	this._name = "food";
}
Food.prototype.getName = function(){
	return this._name;
}
Food.prototype.eat = function(){
	console.log("Eating " + this.getName());
}
function Egg(){
	Food.apply(this, arguments);
	this._name = "egg";
}
Egg.prototype = Object.create(Food.prototype);
Egg.prototype.constructor = Egg;
function Milk(){
	Food.apply(this, arguments);
	this._name = "milk";
}
Milk.prototype = Object.create(Food.prototype);
Milk.prototype.constructor = Milk;

var farm = new Farm();
farm.process(new Chicken()).eat();
farm.process(new Cow()).eat();
