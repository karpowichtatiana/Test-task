class Farm{
	process(animal: Animal): Food{
			return animal.produce();
	}
}
class Animal{
	produce(): Food{
		return (new Food());
	}
}
class Chicken extends Animal{
	produce(): Egg{
		return (new Egg());
	}
}
class Cow extends Animal{
	produce(): Milk{
		return (new Milk());
	}
}
class Food{
	_name: string;
	constructor(){
		this._name = "food";
	}
	getName(): string{
		return this._name;
	}
	eat(): void{
		console.log("Eating " + this.getName());
	}
}
class Egg extends Food{
	constructor(){
		super();
		this._name = "egg";
	}
	eat(): void{
		super.eat();
	}
}
class Milk extends Food{
	constructor(){
		super();
		this._name = "milk";
	}
	eat(): void{
		super.eat();
	}
}
const farm : Farm = new Farm();
farm.process(new Chicken()).eat();
farm.process(new Cow()).eat();


