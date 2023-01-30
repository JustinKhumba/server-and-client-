const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('message', (data) => {
    console.log(`Received message from ${socket.id}:`, data);
    socket.broadcast.emit('message', data);
  });
  socket.on('chat', (data) => {
    console.log(`Received chat message from ${socket.id}:`, data);
    io.emit('chat', data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
