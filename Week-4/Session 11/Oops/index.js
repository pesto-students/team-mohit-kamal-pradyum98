// Inheritance
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`Driving ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

//Polymorphism
class Shape {
  calculateArea() {
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
const triangle = new Triangle(6, 8);
const circle = new Circle(4);

console.log(rectangle.calculateArea()); 
console.log(triangle.calculateArea()); 
console.log(circle.calculateArea()); 

//Abstraction and Encapsulation
class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    withdraw(amount) {
        if (this.getBalance() - amount >= 0) {
            super.withdraw(amount);
        } else {
            console.log('Withdrawal failed: Insufficient funds');
        }
    }
}

const checkingAc = new CheckingAccount('CASDFHASD', 83000, 'LM');
const savingsAcc = new SavingsAccount('JDASODASDA', 33000, 'M2');

checkingAc.deposit(2000);
checkingAc.withdraw(1000);

savingsAcc.deposit(1000);
savingsAcc.withdraw(5000);

console.log(checkingAc.getBalance()); 
console.log(savingsAcc.getBalance()); 