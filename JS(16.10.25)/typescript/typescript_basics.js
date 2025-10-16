// ===============================
// 🌟 TypeScript Basics - Full Example
// Covers: Types, Interfaces, Type Inference, Decorators, Generics
// ===============================
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 1️⃣ TYPES - Explicit type annotations
var username = "Subasri";
var age = 22;
var isStudent = true;
console.log("Types Example:");
console.log("Name: ".concat(username, ", Age: ").concat(age, ", Student: ").concat(isStudent));
console.log("--------------------------------");
var accountStatus = "active";
console.log("Account Status:", accountStatus);
console.log("--------------------------------");
var person1 = {
    name: "Subasri",
    age: 22,
    city: "Nagapattinam",
    greet: function () {
        return "Hello, my name is ".concat(this.name, "!");
    },
};
console.log("Interfaces Example:");
console.log(person1.greet());
console.log("--------------------------------");
// 3️⃣ TYPE INFERENCE - Let TypeScript figure out types automatically
var course = "Full Stack Development"; // inferred as string
var duration = 6; // inferred as number
console.log("Type Inference Example:");
console.log("Course: ".concat(course, ", Duration: ").concat(duration, " months"));
function add(a, b) {
    return a + b; // return type inferred as number
}
console.log("Sum:", add(10, 20));
console.log("--------------------------------");
// 4️⃣ DECORATORS - Add metadata or behavior to classes/functions
// To enable decorators, add this line in tsconfig.json:
// "experimentalDecorators": true
// Simple class decorator
function Logger(constructor) {
    console.log("📘 Logger Decorator Called for:", constructor.name);
}
var Student = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Student = _classThis = /** @class */ (function () {
        function Student_1(name, department) {
            this.name = name;
            this.department = department;
        }
        return Student_1;
    }());
    __setFunctionName(_classThis, "Student");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Student = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Student = _classThis;
}();
var student = new Student("Subasri", "MCA");
console.log("Decorators Example:");
console.log("Student: ".concat(student.name, ", Department: ").concat(student.department));
console.log("--------------------------------");
// 5️⃣ GENERICS - Reusable components with flexible types
function identity(value) {
    return value;
}
console.log("Generics Example:");
console.log("Number:", identity(100));
console.log("String:", identity("Hello TypeScript!"));
var numberBox = { content: 123 };
var stringBox = { content: "Generic Box" };
console.log("Number Box:", numberBox);
console.log("String Box:", stringBox);
// Generic class
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.add = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    return DataStore;
}());
var stringStore = new DataStore();
stringStore.add("Hello");
stringStore.add("World");
var numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log("Generic Class Example:");
console.log("Strings:", stringStore.getAll());
console.log("Numbers:", numberStore.getAll());
console.log("--------------------------------");
// ✅ END OF PROGRAM
console.log("🎯 All TypeScript concepts demonstrated successfully!");
