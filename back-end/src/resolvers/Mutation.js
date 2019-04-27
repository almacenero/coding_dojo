const Sala = require('../models/Sala')
const Invitado = require('../models/Invitado')
const {transport, makeNiceEmail} = require('../mail')

async function invitadosSala(root, args) {  
      
      let sala =  await Sala.findOne( {_id: args._id}  )    
      
      sala.invitados = args.invitados

      sala.save() 
      args.invitados.map((inv)=>{
            const mailRes = transport.sendMail({
                  from: 'gerencia@mail.com',
                  to: inv.mail,
                  subject: 'Gracias por registrarte',
                  html: makeNiceEmail( inv.name, sala.name)
            
                })
      }) 

      return sala  
}

async function createInvitado(root, args) {  
      let inv = await new Invitado(args)
      inv.save()
      return inv
}

async function deleteInvitado(root, args) {  
      const inv  =  await Invitado.findOneAndDelete({_id: args._id})
      return inv
}

async function createSala(root, args) {  
      let sala = await new Sala(args)
      sala.invitados = []
      sala.save()
      return sala
}

async function deleteSala(root, args) { 
      console.log(args.invitados) 
      const sala  =  await Sala.findOneAndDelete({_id: args._id})
      return sala 
}

module.exports = {
      createSala,
      deleteSala,
      createInvitado,
      deleteInvitado,
      invitadosSala
}
