const userTypeDefs = `#graphql
  type User {
    id: ID
    userId: String
    userPwHash: String
    name: String
    authority: String
    token: String
    post: [Post]
  }

  type UserSingleOutput{
    id: ID
    userId: String
    name: String
    authority: String
    post: [Post]
  }

  type Post {
    id: ID
    title: String
    writer: String
    content: String
    createdAt: String
    tags:[String]
  }

  input UserCreateInput {
    id: ID
    userId: String!
    userPw: String!
    name: String
    authority: String!
    post: [PostInput]
  }

  input UserUpdateInput {
    id: ID
    userId: String
    userPw: String
    name: String
    authority: String
    token: String
  }
  
  input PostInput {
    id: ID
    title: String!
    writer: String!
    tags: [String]
    content: String
  }

  input PostUpdateInput {
    id: ID
    title: String!
    writer: String!
    content: String
  }

  type Query {
    users: [User]!
    singleUser(userId: String!): UserSingleOutput
    allPost: [Post]
  }

  type Mutation {
    signup(userId: String!, userPw:String!, name: String!): Boolean!
    login(userId: String!, userPw: String! ) : User
    logout:Boolean

    createUser(input: UserCreateInput!): User
    createPost(input: PostInput!): Post

    updateUser(input: UserUpdateInput!): User
    updatePost(input: PostUpdateInput!): Post

    deleteUser(id: ID!): User
    deletePost(id: ID!): Post
  }
`;
export default userTypeDefs;
