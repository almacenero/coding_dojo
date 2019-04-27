const Sala = require('../models/Sala')

async function createSala(root, args) {  
     
      let sala = await new Sala(args)
      sala.save()
      return sala
}

/* async function deleteSala(root, args) {  
      //const sala  =  await Sala.findByIdAndRemove({_id: args._id})
      //return sala
} */

module.exports = {
      createSala,
     // deleteSala
}
