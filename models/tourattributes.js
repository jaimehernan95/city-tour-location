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