var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
//Your code BELOW
io.on('connection', function (socket) {
  console.log('connected');
  socket.on('disconnect', function(){
    console.log('disconnected');
  })
})

io.on('connection', function (socket) { //socket io server side code
  socket.on('chat message', function(msg) {
    console.log(msg);
    io.emit('chat message', msg)
  })
})


http.listen(3000, function(){
  console.log('listening on Port 3000');
});
