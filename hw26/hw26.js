class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    stomach = [];
    eat(food) {
        this.stomach.push(food);
        console.log(`${this.legs} eat food`);
    }
}
class Rabbit extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed;
    }
    jump() {
        console.log(`${this.legs} jump`);
    }
    eat(food) {
        if (!(food instanceof Vegetable)) {
            throw new Error("rabbit can eat only vegetables");
        }
        super.eat(food);
    }
}
class Snake extends Animal {
    constructor(legs, isPoisonous) {
        super(legs);
        this.isPoisonous = isPoisonous;
    }
    crawl() {
        console.log(`${this.legs}can crawl`);
    }
    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error("snake can eat only rabbits");
        }
        super.eat(food);
    }
}
class Human extends Animal {
    constructor(legs, firstName, lastName) {
        super(legs);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log(`${this.legs} walk`);
    }
    greet() {
        console.log(`${this.firstName} ${this.lastName} say hello`);
    }
    eat(food) {
        if (food instanceof Human) {
            throw new Error("human can't eat humans");
        }
        super.eat(food);
    }
}

