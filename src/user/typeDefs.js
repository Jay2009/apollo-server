const typeDefs = `#graphql
type Response {
  errCode: Int
  message: String
}
  type User {
    id: ID
    userId: String
    userPw: String
    name: String
    authority: String
    books: [Book]
  }
  
  type Book {
    id: ID
    title: String
    writer: String
  }

  input UserCreateInput {
    id: ID
    userId: String!
    userPw: String!
    name: String
    authority: String!
    books: String
}

  type Query {
    allUser: [User]
    allBook: [Book]
  }

  type Mutation {
    createUser(input: UserCreateInput!): User
    createBook(title: String!, writer: String!): Book
    deleteAuthor(id: ID!): User
    deleteBook(id: ID!): Book
  }
`;
export default typeDefs;
