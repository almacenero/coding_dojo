const { GraphQLServer } = require('graphql-yoga')
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')
const dotenv = require('dotenv');
dotenv.config()

const resolvers = {     
      Query, 
      Mutation
      
    }
const options = {
      port: 4000,
      endpoint: '/graphql',
      subscriptions: '/subscriptions',
      playground: '/playground',
    }
const server = new GraphQLServer({ 
      typeDefs: './src/schema.graphql', 
      resolvers })
server.start(options, ({ port }) =>
  console.log(
    `Servidor iniciado, Escuchando en el puerto ${port} por peticiones entrantes.`,
  ),
)