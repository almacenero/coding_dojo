var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost:27017/idukay',{useNewUrlParser: true});

var Schema = mongoose.Schema

var invitadoSchema = new Schema({
    name: String,
    mail: String
    });

invitadoSchema.plugin(mongoosePaginate); 

module.exports = mongoose.model('Invitado', invitadoSchema);