const Sala = require('../models/Sala')

async function createSala(root, args) {  
      console.log("Estoy llegando aqui")
      let sala = await new Sala(args)
      sala.save()
      return sala 
}

module.exports = {
      createSala
}
