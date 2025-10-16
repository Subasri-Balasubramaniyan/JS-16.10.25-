JavaScript & TypeScript Projects
Table of Contents

JavaScript in Node.js

WebSockets

Service Workers & PWA

TypeScript Basics

1️⃣ JavaScript in Node.js

Node.js allows you to run JavaScript on the server side. You can use it for backend development, file operations, HTTP servers, and more.

Key Concepts

Modules: Separate code into reusable files using require (CommonJS) or import (ESM).

Filesystem (fs): Read/write files.

HTTP Module: Create web servers and handle requests/responses.

npm Packages: Install third-party libraries (npm install chalk).

Process Object: Access runtime information, command-line arguments, and environment variables.

Example: Simple HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});

server.listen(3000, () => console.log('Server running on port 3000'));

2️⃣ WebSockets

WebSockets enable real-time two-way communication between client and server.

Key Concept

Use socket.io or native ws for Node.js.

Ideal for chat apps, live notifications, or gaming.

Example: Simple Socket.IO Server
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('message', (msg) => {
    console.log('Message:', msg);
    socket.emit('reply', `Server received: ${msg}`);
  });
});

3️⃣ Service Workers & PWA

Progressive Web Apps (PWA) allow your website to behave like a native app.
Service Workers enable offline caching, background sync, and push notifications.

Key Concepts

Caching: Save assets for offline use.

Installable apps: Users can add your app to home screen.

Background sync & notifications: Keep app updated even when offline.

Example: Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => cache.addAll(['/', '/index.html', '/app.js']))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)));
});

4️⃣ TypeScript Basics

TypeScript is a superset of JavaScript that adds static typing and advanced features.

Key Features

Types: string, number, boolean, any, tuple, enum, union, null/undefined.

Interfaces: Define object structure.

Type Inference: TypeScript automatically infers types.

Generics: Reusable, type-safe functions and classes.

Decorators: Add metadata to classes/methods (experimental).

Example: TypeScript Function with Types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // Output: 8

Example: Interface
interface Person {
  name: string;
  age: number;
}

const student: Person = { name: "Subasri", age: 22 };
console.log(student.name);

Example: Generics
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));

📦 Running Projects
Node.js
node app.js

TypeScript
tsc filename.ts
node filename.js

PWA

Serve your folder via HTTP (e.g., npx http-server).

Open in browser → check offline capability and install prompt.

WebSockets

Run server with Node.js.

Connect using client-side Socket.IO library or any WebSocket client.

🔑 Key Takeaways

Node.js: Server-side JS, file & HTTP operations, npm ecosystem.

WebSockets: Real-time bidirectional communication.

Service Workers & PWA: Offline caching, installable apps, background sync.

TypeScript: Strong typing, interfaces, generics, decorators — more maintainable & error-free code.
