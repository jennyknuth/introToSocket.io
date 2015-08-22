var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
//Your code BELOW




http.listen(3000, function(){
  console.log('listening on Port 3000');
});
