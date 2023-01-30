const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('chat', 'Hello, everyone!');
});

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.on('chat', (data) => {
  console.log('Received chat message:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
