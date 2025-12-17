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