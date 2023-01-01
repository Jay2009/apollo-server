import mockData from "../json/mockData.json";

let userList = mockData; // 유저의 목록
let userUpdateList = [];
let singleUser = {};
let userCnt = 3;

let postList = [];
let postUpdateList = [];
let postCnt = 0; // 유저,포스트의 id 순번

const resolvers = {
  Query: {
    // 유저 목록 검색
    allUser: () => userList,
    // 게시글 목록 검색
    allPost: () => postList,

    // client쪽에서 받은 파라미터를 통한 싱글 유저 검색
    singleUser(_, userId) {
      userList.forEach((user) => {
        if (user.userId == userId.userId) {
          singleUser = { ...user };
          // 스프레이드 연산자는 나중 추가되어지는 객체 속성값이 있을 수 있어 추가.
        }
      });
      return singleUser;
    },
    // findAuthor: ({ id }) =>
    //   userList.find((author) => {
    //     author.id == id;
    //   }),
    // findBook: ({ id }) =>
    //   bookList.find((book) => {
    //     book.id == id;
    //   }),
  },
  Mutation: {
    // 유저 추가
    createUser(_, input, { UserCreateInput }) {
      const inputObj = Object.values(input);
      const user = { ...inputObj[0], id: userCnt++ };
      userList.push(user);
      return user;
    },

    // 게시글 추가
    createPost(_, input, { PostInput }) {
      const postObj = Object.values(input);
      const post = { ...postObj[0], id: postCnt++ };
      postList.push(post);
      return post;
    },

    // 유저 업데이트
    updateUser(_, input, { UserUpdateInput }) {
      const inputObj = Object.values(input);
      const updateUser = { ...inputObj[0] };

      userList.forEach((user) => {
        if (user.userId != updateUser.userId) {
          userUpdateList.push(user);
        }
      });
      userList = [];
      userUpdateList.push({ ...updateUser });
      userList = userUpdateList;
      return userList;
    },

    // 게시글 업데이트
    updatePost(_, input, { PostUpdateInput }) {
      const postObj = Object.values(input);
      const updatePost = { ...postObj[0] };

      postList.forEach((post) => {
        if (post.writer != updatePost.writer) {
          postUpdateList.push(user);
        }
      });

      postList = [];
      postUpdateList.push({ ...updatePost });
      postList = postUpdateList;
      return postList;
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

export default resolvers;
