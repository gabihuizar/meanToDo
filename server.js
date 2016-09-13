var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')

mongoose.connect('mongodb://gaby:mean@jello.modulusmongo.net:27017/R7idatyx');


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json '}));
app.use(methodOverride());

app.listen(8080);
console.log("App listening on port 8080");