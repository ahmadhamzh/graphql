import { ApolloServer, ServerInfo } from 'apollo-server'
import {sequelize} from './models/index'
import { typeDefs } from './Coffee/graphql/typdefs/typdefs'
import { resolvers } from './Coffee/graphql/resolver/resolver'
import { Coffeeservices } from './Coffee/services/controller'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context : ()=>{ hnsdkjs:new Coffeeservices() }
})
 function start(){
  server.listen().then(({ url }: ServerInfo) => {
    console.log(`listning to ${url}`);
  })
}

sequelize.sync().then(()=>{
  start()
})

