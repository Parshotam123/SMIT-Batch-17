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