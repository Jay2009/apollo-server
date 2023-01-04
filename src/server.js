import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import context from "./apollo/user/context.js";
import resolvers from "./apollo/user/resolvers.js";
import typeDefs from "./apollo/user/typeDefs.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

// const { url } = await startStandaloneServer(server, {
//   context: async () => {
//     const { cache } = server;
//     return {
//       dataSources: {
//         userAPI: new UserAPI({ cache }),
//       },
//     };
//   },
//   listen: { port: 4000 },
// });

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({
    token: await getTokenForRequest(req),
  }),
  listen: { port: process.env.PORT || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
