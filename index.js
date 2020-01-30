var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://yourDB:yourpassword@udemydb-pknct.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(morgan('dev'));

var port = process.env.PORT || 8085;

app.use('/', routes);

app.listen(port);

console.log('listening to port' + port);

module.exports = app;