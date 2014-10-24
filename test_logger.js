var connect = require('connect');
var app = connect();
var logger = require('./middleware/logger');

app.use(logger(':method :url'));

app.use('/', function(req,res){
   res.setHeader('Content-Type', 'text/html');
   res.end('<h1>Connect logger test...</h1>');
});

app.listen(3000, function(){
   console.log('Connect server started...');
});