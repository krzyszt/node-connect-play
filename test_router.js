var connect = require('connect');
var app = connect();
var logger = require('./middleware/logger');
var router = require('./middleware/router');

var routes = {
   GET: {
      '/users': function(req, res){
         res.end('tobi, loki, ferret');
      },
      '/user/:id' : function(req,res){
         res.end('user ' + id);
      }
   },
   DELETE: {
      '/user/:id': function(req,res){
         res.end('deleted user ' + id);
      }
   }
};

app.use(logger(':method :url'));
app.use(router(require('./routers/user')));
app.use(router(require('./routers/admin')));

app.use('/', function(req,res){
   res.setHeader('Content-Type', 'text/html');
   res.end('<h1>Connect logger test...</h1>');
});

app.listen(3000, function(){
   console.log('Connect server started...');
});