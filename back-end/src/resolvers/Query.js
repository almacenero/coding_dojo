const Sala = require('../models/Sala')

const allSalas = async (root, args) => {
      const salas = await Sala.find({})
      return salas
}


module.exports = {
      allSalas
}
