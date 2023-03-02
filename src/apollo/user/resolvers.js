import { GraphQLError } from "graphql";
import bcrypt from "bcrypt";
import sha256 from "crypto-js/sha256.js";
import rand from "csprng";

let userList = global.userList;
let userUpdateList = [];
let singleUser = {};
let loginUser = {};
let userCnt = 3;

let postList = [
  {
    id: 0,
    title: "Welcome to Jay web.",
    writer: "admin",
    createdAt: "2023/02/23-09:00",
    tags: ["others"],
    content: "Share any information with people in Mars!.",
  },
  {
    id: 1,
    title: "Test",
    writer: "admin",
    createdAt: "2023/02/23-09:30",
    tags: ["stock", "others"],
    content: "test content",
  },
];

let postCnt = 2; // 유저,포스트의 id 순번

const userResolvers = {
  Query: {
    // 유저 목록 검색
    users: (_, __, { user }) => {
      if (!user)
        throw new GraphQLError("No user", {
          extensions: {
            code: "UNAUTHENTICATED",
            myExtension: "noneUser",
          },
        });
      if (!user.roles.includes("admin"))
        throw new GraphQLError("not authenticated", {
          extensions: {
            code: "FORBIDDEN",
            myExtension: "notAdmin",
          },
        });

      return users;
    },
    // 게시글 목록 검색
    allPost: () => {
      return postList;
    },

    // client쪽에서 받은 파라미터를 통한 싱글 유저 검색
    singleUser(_, userId) {
      global.userList.forEach((user) => {
        if (user.userId == userId.userId) {
          singleUser = { ...user };
          // 스프레이드 연산자는 나중 추가되어지는 객체 속성값이 있을 수 있어 추가.
        }
      });
      return singleUser;
    },
  },
  Mutation: {
    signup: (_, { userId, userPw, name }) => {
      if (global.userList.find((user) => user.userId == userId)) return false;
      bcrypt.hash(userPw, 10, function (err, userPwHash) {
        const newUser = {
          id: global.userList.length + 1,
          userId,
          userPwHash,
          name,
          authority: "user",
          token: "",
        };
        global.userList.push(newUser);
      });

      return true;
    },

    login: async (_, { userId, userPw }, context) => {
      let user = global.userList.find((user) => user.userId === userId);
      if (!user) {
        return null;
      }
      if (user.token) {
        user.token = "";
      }
      if (!bcrypt.compareSync(userPw, user.userPwHash)) {
        return null;
      }
      // 비밀번호 불일치시 null

      user.token = sha256(rand(160, 36) + userId + userPw).toString();
      return user;
    },

    logout: (_, __, { user }) => {
      if (!user)
        throw new GraphQLError("Not Authenticated", {
          extensions: {
            code: "UNAUTENTICATED",
          },
        });

      user.token = "";
      return true;
    },

    // 유저 업데이트
    async updateUser(_, input, context) {
      const inputObj = Object.values(input);
      const updateUser = { ...inputObj[0] };
      let bakeUserList = [];
      let newPwHash;
      if (updateUser.userPw) {
        newPwHash = await bcrypt.hash(updateUser.userPw, 10);
      }
      if (updateUser.token == context.user.token) {
        global.userList.forEach((user) => {
          if (user.userId != updateUser.userId) {
            bakeUserList.push(user);
          }
        });
        bakeUserList.push({
          ...context.user,
          userId: updateUser.userId,
          name: updateUser.name,
          userPwHash: updateUser.userPw ? newPwHash : context.user.userPwHash,
        });
        global.userList = bakeUserList;
      } else {
        throw new GraphQLError("Token is not valid!", {
          extensions: {
            code: "UNAUTENTICATED",
          },
        });
      }
      return global.userList;
    },

    // 게시글 생성
    createPost(_, input, { PostInput }) {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      let hour = today.getHours();
      let min = today.getMinutes();
      let createDate = year + "/" + month + "/" + date + "-" + hour + ":" + min;

      const postObj = Object.values(input);
      const post = {
        ...postObj[0],
        id: postCnt++,
        createdAt: createDate,
      };
      postList.push(post);
      return postList;
    },

    // 게시글 업데이트
    updatePost(_, input, { PostUpdateInput }) {
      let postUpdateList = [];
      const postObj = Object.values(input);
      const updatePost = { ...postObj[0] };

      postList.forEach((post) => {
        if (post.id != updatePost.id) {
          postUpdateList.push(post);
        }
      });
      postUpdateList.push({ ...updatePost });
      postList = postUpdateList.sort(function (a, b) {
        return a.id - b.id;
      });
      return postList;
    },

    // 게시글 삭제
    deletePost(_, { input }) {
      const idx = postList.findIndex((post) => post.id == input);
      let post = {};
      if (idx >= 0) {
        post = postList[idx];
        postList.splice(idx, 1);
      }
      return postList;
    },

    // 어드민 계정으로 admin page에서 유저 추가.
    createUser(_, input, { UserCreateInput }) {
      const inputObj = Object.values(input);
      const user = { ...inputObj[0], id: userCnt++ };
      userList.push(user);
      return user;
    },
    // 유저삭제
    deleteUser(_, { id }) {
      const idx = userList.findIndex((user) => user.id == id);
      let user = {};
      if (idx >= 0) {
        user = userList[idx];
        userList.splice(idx, 1);
      }
      return user;
    },
  },
};

export default userResolvers;
