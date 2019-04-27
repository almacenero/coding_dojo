const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()

console.log("entrando a la funcion mail: " + process.env.MAIL_HOST)

var transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      tls: {
        servername: process.env.MAIL_HOST
    }
    });

const makeNiceEmail = ( salaname, name) => `
    <div 
    style="
    color: black
    ">
    <h2>Estimad@</h2>
    <h2>${name}</h2>
    <p>Ha sido invitado a una sala de Satand-up: ${salaname}</p>
    <p>Puede Acceder en esta url:</p>
    <div>
`    

exports.transport = transport    
exports.makeNiceEmail = makeNiceEmail