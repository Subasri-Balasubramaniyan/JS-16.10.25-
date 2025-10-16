// Import WebSocket library
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log('✅ WebSocket Server running on ws://localhost:8080');

// Listen for connections
wss.on('connection', (socket) => {
  console.log('🔗 New client connected.');

  // Send welcome message
  socket.send('Welcome to WebSocket server!');

  // Listen for messages from client
  socket.on('message', (message) => {
    console.log('📩 Received:', message.toString());
    
    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(`User says: ${message}`);
      }
    });
  });

  // Handle disconnection
  socket.on('close', () => {
    console.log('❌ Client disconnected.');
  });
});
