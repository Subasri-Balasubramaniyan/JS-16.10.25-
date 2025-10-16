// Define an interface for a person
interface Person {
  name: string;
  age: number;
  email?: string; // optional property
}

// Create an object that follows the Person interface
const person1: Person = {
  name: "Subasri",
  age: 22,
  email: "subasri@example.com"
};

const person2: Person = {
  name: "Priya",
  age: 25
};


console.log(person1);
console.log(person2);

// Interface with a method
interface Student {
  name: string;
  rollNo: number;
  getDetails(): string;
}

const student1: Student = {
  name: "Subasri",
  rollNo: 101,
  getDetails() {
    return `Name: ${this.name}, Roll No: ${this.rollNo}`;
  }
};

console.log(student1.getDetails());

// Interface for function type
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log("Addition:", add(5, 3));       // Output: 8
console.log("Multiplication:", multiply(4, 2)); // Output: 8

// Interface with inheritance
interface Employee extends Person {
  position: string;
  salary: number;
}

const emp: Employee = {
  name: "Kumar",
  age: 30,
  position: "Developer",
  salary: 50000
};

console.log(emp);
