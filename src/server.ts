import { ApolloServer, ServerInfo } from "apollo-server";
import { context } from "./Coffee/services";
import { resolvers } from "./Coffee/graphql/resolver";
import { sequelize } from "./models";
import { typeDefs } from "./Coffee/graphql/typdefs";

const server = new ApolloServer({
  context,
  resolvers,
  typeDefs,
});

function start() {
  server.listen().then(({ url }: ServerInfo) => {
    console.log(`listning to ${url}`);
  });
}

sequelize.sync({ force: true }).then(() => {
  start();
});
