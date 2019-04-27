const Sala = require('../models/Sala')
const Invitado = require('../models/Invitado')

const allSalas = async (root, args) => {
      const salas = await Sala.find({}).sort({'_id':-1})
      return salas
}

const allInvitados = async (root, args) => {
      const inv = await Invitado.find({}).sort({'_id':-1})
      return inv
}
module.exports = {
      allSalas,
      allInvitados
}
