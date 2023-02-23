import { GraphQLError } from "graphql";
import bcrypt from "bcrypt";
import sha256 from "crypto-js/sha256.js";
import rand from "csprng";
//import userList from "../../dataBase/users.js";

let userList = global.userList;
let userUpdateList = [];
let singleUser = {};
let loginUser = {};
let userCnt = 3;

let postList = [
  {
    id: 0,
    title: "test",
    writer: "Admin",
    createdAt: "2023/02/23-09:00",
    tags: ["stock", "realEstate"],
    content: "testttt content",
  },
  {
    id: 1,
    title: "test2",
    writer: "Admin",
    createdAt: "2023/02/23-09:30",
    tags: ["stock", "others"],
    content: "testttt content",
  },
];

let postCnt = 0; // 유저,포스트의 id 순번

const userResolvers = {
  Query: {
    // 유저 목록 검색
    users: (_, __, { user }) => {
      console.log(global.userList, "모든 유저들");
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
      console.log(postList, "포스트 리스트으으@@@");
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

    // findLoginUser: ({ loginFormData }) =>
    //   userList.find((user) => {
    //     user.userId == loginFormData.userId &&
    //       user.userPw == loginFormData.userPw;
    //   }),

    // findBook: ({ id }) =>
    //   bookList.find((book) => {
    //     book.id == id;
    //   }),
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
      await console.log(context, "contexttt");
      let user = global.userList.find((user) => user.userId === userId);
      if (!user) {
        console.log("유저가 없어!");
        return null;
      }
      if (user.token) {
        console.log(user.token, "유저 토큰이 있네?");
        user.token = "";
      }
      if (!bcrypt.compareSync(userPw, user.userPwHash)) {
        console.log("비번이 틀렸어!!");
        return null;
      }
      // 비밀번호 불일치시 null

      user.token = sha256(rand(160, 36) + userId + userPw).toString();
      return user;
    },

    logout: (_, __, { user }) => {
      console.log(user, "yoo");
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
      //input form data
      // let bakeUserList = userList.find((user) => {
      //   return user.userId == updateUser.userId;
      // }); // bake user list
      if (updateUser.userPw) {
        newPwHash = await bcrypt.hash(updateUser.userPw, 10);
      }
      if (updateUser.token == context.user.token) {
        // auth with updateUser token and context user token
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
        id: postList.length - 1 + 1,
        createdAt: createDate,
      };
      postList.push(post);
      console.log(postList, "sdfsdf");
      return postList;
    },

    // 게시글 업데이트
    updatePost(_, input, { PostUpdateInput }) {
      let postUpdateList = [];
      const postObj = Object.values(input);
      const updatePost = { ...postObj[0] };
      postList.forEach((post) => {
        if (post.writer != updatePost.writer) {
          postUpdateList.push(user);
        }
      });
      postUpdateList.push({ ...updatePost });
      postList = postUpdateList;
      return postList;
    },

    // 게시글 삭제
    deletePost(_, { id }) {
      const idx = postList.findIndex((post) => post.id == id);
      let post = {};
      if (idx >= 0) {
        post = postList[idx];
        postList.splice(idx, 1);
      }
      return post;
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

  // 연쇄 리졸버
  // User: {
  //   // 유저의 게시글 검색
  //   posts(parent) {
  //     const list = [];
  //     postList.forEach((post) => {
  //       if (post.title === parent.name) list.push(post);
  //     });
  //     return list;
  //   },
  // },
};

export default userResolvers;
