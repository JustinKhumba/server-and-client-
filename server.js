const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
