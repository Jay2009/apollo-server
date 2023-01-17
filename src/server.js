import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import userList from "./dataBase/users.js";
import typeDefs from "./apollo/typeDefs.js";
import resolvers from "./apollo/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    const token = req.headers.authorization || "";
    if (token.length != 64) return { user: null };
    const user = userList.find((user) => user.token === token);
    return { user };
  },

  listen: { port: process.env.PORT || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
