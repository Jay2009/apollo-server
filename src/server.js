import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./apollo/typeDefs.js";
import resolvers from "./apollo/resolvers.js";
let userList = [
  {
    id: 1,
    userId: "admin",
    userPwHash: "$2b$10$FEIMUp/pqdqu/LsqID6MOu3U2.QnFO6UgzRD7M8h9wTrgaTclRwhe",
    name: "Admin",
    authority: "admin",
    token: "",
    post: [],
  },
];

global.userList = userList;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    const token = (await req.headers.authorization) || "";
    if (token.length != 64) {
      return { user: null };
    }
    const user = global.userList.find((user) => user.token === token);
    return { user };
  },

  listen: { port: process.env.PORT || 4000 },
});
