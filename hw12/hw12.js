//1
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function() {
        console.log("Мяу");
    };
};

const cat = new Cat();
cat.meow();

//2
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.firstName);
    };
}
const greetUser = new User();
greetUser.greet();
