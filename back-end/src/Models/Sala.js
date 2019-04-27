var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost:27017/idukay',{useNewUrlParser: true});

var Schema = mongoose.Schema

var salaSchema = new Schema({
    name: String,
    ubication: String,
    date: String
    });

salaSchema.plugin(mongoosePaginate); 

module.exports = mongoose.model('Sala', salaSchema);