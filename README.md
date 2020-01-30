# city-tour-location


This application is part of an Udemy course called full-stack native iOS apps with Swift 4, iOS 11 with NodeJS.

Requirements

Install Node JS
Install NPM
Create and account in MongoDB
Download POSTMAN

1.  Create a folder city-tour-location or. clode  this repo:  https://github.com/jaimehernan95/city-tour-location.git

Inside the folder city-tour-location create 2 node JS files 

index JS  ( entry point)
routes JS. ( POST method)

Inside the directory install

NPM install express
NPM install body-parser
NPM install morgan
NPM install mongoose


The following code show the mongoDB connection 

index.js
---------
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


Routes
-----

in this file we can declare our collection tourLocations and objects where the user can enter information it used the post method using the following objtecs:

        title,
        category,
        longitude,
        latitude,
        description,
        images,
        thumbnail,


routes.js
----------
var express = require('express');

var router = express.Router();

var tourLocations = require('./models/tourattributes');

router.route('/tourLocations')
    .post(function (req, res) {
        var request = new tourLocations();
        
        request.title = req.body.title,
        request.category = req.body.category,
        request.longitude = req.body.longitude,
        request.latitude = req.body.latitude,
        request.description = req.body.description,
        request.images = req.body.images,
        request.thumbnail = req.body.thumbnail

        request.save(function(err) {
            if (err)
            res.send(err);
            res.json({ request: 'your location have been added'});
         });
    });
    module.exports = router;




Database: collections and Objects
----------------------------------
Create a new folder called " models" inside  city-tour-location

Inside the folder models create a Node JS file called " tourattributes.JS" 

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var tourApp = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    longitud:[{
        type: Number,
        required: true,
    }],
    latitude:[{
        type: Number,
        required: true,
    }],
    description:{
        type: String,
        required: true,
    },
    images:[{
        type: String,
    }],
    thumbnail:[{
        type: String,
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('tourLocations', tourApp);



The next module is in SWIFT


