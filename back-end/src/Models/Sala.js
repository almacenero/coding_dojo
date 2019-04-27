var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost:27017/idukay',{useNewUrlParser: true});

var Schema = mongoose.Schema

var invitado = new Schema({
      _id: String, 
      name: String,
      email: String
});

var salaSchema = new Schema({
    name: String,
    ubication: String,
    date: String,
    invitados: [invitado]
    });

salaSchema.plugin(mongoosePaginate); 

module.exports = mongoose.model('Sala', salaSchema);