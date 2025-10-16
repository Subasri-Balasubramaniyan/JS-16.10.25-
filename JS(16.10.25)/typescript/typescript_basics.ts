// ===============================
// 🌟 TypeScript Basics - Full Example
// Covers: Types, Interfaces, Type Inference, Decorators, Generics
// ===============================

// 1️⃣ TYPES - Explicit type annotations
let username: string = "Subasri";
let age: number = 22;
let isStudent: boolean = true;

console.log("Types Example:");
console.log(`Name: ${username}, Age: ${age}, Student: ${isStudent}`);
console.log("--------------------------------");

// Custom type using union
type Status = "active" | "inactive" | "pending";
let accountStatus: Status = "active";
console.log("Account Status:", accountStatus);
console.log("--------------------------------");

// 2️⃣ INTERFACES - Defining object structure
interface Person {
  name: string;
  age: number;
  city?: string; // Optional property
  greet(): string;
}

const person1: Person = {
  name: "Subasri",
  age: 22,
  city: "Nagapattinam",
  greet() {
    return `Hello, my name is ${this.name}!`;
  },
};

console.log("Interfaces Example:");
console.log(person1.greet());
console.log("--------------------------------");

// 3️⃣ TYPE INFERENCE - Let TypeScript figure out types automatically
let course = "Full Stack Development"; // inferred as string
let duration = 6; // inferred as number

console.log("Type Inference Example:");
console.log(`Course: ${course}, Duration: ${duration} months`);

function add(a: number, b: number) {
  return a + b; // return type inferred as number
}
console.log("Sum:", add(10, 20));
console.log("--------------------------------");

// 4️⃣ DECORATORS - Add metadata or behavior to classes/functions
// To enable decorators, add this line in tsconfig.json:
// "experimentalDecorators": true

// Simple class decorator
function Logger(constructor: Function) {
  console.log("📘 Logger Decorator Called for:", constructor.name);
}

@Logger
class Student {
  constructor(public name: string, public department: string) {}
}

const student = new Student("Subasri", "MCA");
console.log("Decorators Example:");
console.log(`Student: ${student.name}, Department: ${student.department}`);
console.log("--------------------------------");

// 5️⃣ GENERICS - Reusable components with flexible types
function identity<T>(value: T): T {
  return value;
}

console.log("Generics Example:");
console.log("Number:", identity<number>(100));
console.log("String:", identity<string>("Hello TypeScript!"));

// Generic interface
interface Box<T> {
  content: T;
}

let numberBox: Box<number> = { content: 123 };
let stringBox: Box<string> = { content: "Generic Box" };
console.log("Number Box:", numberBox);
console.log("String Box:", stringBox);

// Generic class
class DataStore<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const stringStore = new DataStore<string>();
stringStore.add("Hello");
stringStore.add("World");

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);

console.log("Generic Class Example:");
console.log("Strings:", stringStore.getAll());
console.log("Numbers:", numberStore.getAll());
console.log("--------------------------------");

// ✅ END OF PROGRAM
console.log("🎯 All TypeScript concepts demonstrated successfully!");
