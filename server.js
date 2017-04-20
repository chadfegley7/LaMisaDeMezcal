var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

// require('./server/config/routes.js');
// require('./server/config/mongoose.js');

app.listen(port, function(){
  console.log('La Misa de Mezcal on port 8000');
});
