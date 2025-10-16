// Function with typed parameters and return type
function add(a, b) {
    return a + b;
}
console.log(add(10, 5)); // Output: 15
// Function with string type
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Subasri")); // Output: Hello, Subasri!
// Function with boolean return type
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
// Function with optional parameter
function welcomeMessage(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name, "!");
}
console.log(welcomeMessage("Subasri")); // Output: Hello, Subasri!
console.log(welcomeMessage("Subasri", "Hi")); // Output: Hi, Subasri!
// Function with default parameter
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15
