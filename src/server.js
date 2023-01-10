import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import context from "./apollo/user/context.js";
import resolvers from "./apollo/user/resolvers.js";
import typeDefs from "./apollo/user/typeDefs.js";
import userList from "./dataBase/users.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    console.log(req.headers.authorization, "auth 몰까?");
    const token = req.headers.authorization || "";
    if (token.length != 64) return { user: null };
    const user = userList.find((user) => user.token === token);
    return { user };
  },

  listen: { port: process.env.PORT || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
