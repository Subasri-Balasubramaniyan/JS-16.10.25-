// BASIC TYPES
var username = "Subasri"; // string type
var age = 22; // number type
var isStudent = true; // boolean type
console.log("Name:", username);
console.log("Age:", age);
console.log("Student:", isStudent);
// ANY TYPE — can hold any value
var randomValue = "Hello";
randomValue = 42; // valid because of 'any'
console.log("Random:", randomValue);
// ARRAY TYPES
var numbers = [10, 20, 30];
var fruits = ["Apple", "Banana", "Mango"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
// TUPLE — fixed-length, specific types
var person = ["Subasri", 22];
console.log("Person Tuple:", person);
// UNION TYPE — variable can have multiple types
var id;
id = "A123";
console.log("ID as string:", id);
id = 1001;
console.log("ID as number:", id);
// ENUM — define a set of named constants
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log("Favorite Color:", favoriteColor);
// OBJECT TYPE
var student = {
    name: "Subasri",
    age: 22,
    course: "MCA"
};
console.log("Student Object:", student);
// NULL and UNDEFINED
var emptyValue = null;
var notAssigned = undefined;
console.log("Null:", emptyValue, "Undefined:", notAssigned);
var position = { x: 10, y: 20 };
console.log("Position:", position);
