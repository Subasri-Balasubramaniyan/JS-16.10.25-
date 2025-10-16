// BASIC TYPES

let username: string = "Subasri"; // string type
let age: number = 22;             // number type
let isStudent: boolean = true;    // boolean type

console.log("Name:", username);
console.log("Age:", age);
console.log("Student:", isStudent);

// ANY TYPE — can hold any value
let randomValue: any = "Hello";
randomValue = 42; // valid because of 'any'
console.log("Random:", randomValue);

// ARRAY TYPES
let numbers: number[] = [10, 20, 30];
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// TUPLE — fixed-length, specific types
let person: [string, number] = ["Subasri", 22];
console.log("Person Tuple:", person);

// UNION TYPE — variable can have multiple types
let id: string | number;
id = "A123";
console.log("ID as string:", id);
id = 1001;
console.log("ID as number:", id);

// ENUM — define a set of named constants
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let favoriteColor: Color = Color.Blue;
console.log("Favorite Color:", favoriteColor);

// OBJECT TYPE
let student: { name: string; age: number; course: string } = {
  name: "Subasri",
  age: 22,
  course: "MCA"
};
console.log("Student Object:", student);

// NULL and UNDEFINED
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log("Null:", emptyValue, "Undefined:", notAssigned);

// TYPE ALIAS — define a custom reusable type
type Point = { x: number; y: number };
let position: Point = { x: 10, y: 20 };
console.log("Position:", position);
