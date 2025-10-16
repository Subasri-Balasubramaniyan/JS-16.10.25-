import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html');
});

io.on('connection', (socket) => {
  console.log('🟢 A user connected');

  // Send message to client
  socket.emit('welcome', 'Welcome to Socket.io server!');

  // Listen for client message
  socket.on('chat message', (msg) => {
    console.log('💬 Message:', msg);
    io.emit('chat message', msg); // broadcast to all
  });

  socket.on('disconnect', () => {
    console.log('🔴 User disconnected');
  });
});

server.listen(3000, () => {
  console.log('✅ Socket.io server running at http://localhost:3000');
});
