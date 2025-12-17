// Javascript OOP Concepts

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name + " is studying");
    }
}

// OOP Concepts Javascript

// Encapsulation

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

// Inheritance

class Person {
    speak() {
        console.log("Person is speaking");
    }
}

class Teacher extends Person {
    teach() {
        console.log("Teacher is teaching");
    }
}

let t1 = new Teacher();
t1.speak();
t1.teach();

// Polymorphism

class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

let d = new Dog();
d.sound();


// Abstraction

class Car {
    start() {
        this.engineOn();
        console.log("Car started");
    }

    engineOn() {
        console.log("Engine running");
    }
}
