import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./src/user/resolvers.js";
import typeDefs from "./src/user/typeDefs.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
