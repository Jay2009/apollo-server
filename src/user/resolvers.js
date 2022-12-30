import mockData from "../json/mockData.json";

let userList = mockData; // 저자의 목록
let bookList = []; // 책의 목록
let userCnt = 3;
let bookCnt = 0; // 저자,책의 id 순번

const resolvers = {
  Query: {
    // 저자 목록 검색
    allUser: () => userList,
    // 책 목록 검색
    allBook: () => bookList,
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
    // 저자 추가
    createUser(parent, input, { UserCreateInput }) {
      const inputObj = Object.values(input);
      const user = { ...inputObj[0], id: userCnt++ };
      userList.push(user);
      return user;
    },

    // 책 추가
    createBook(parent, { title, writer }) {
      const book = { id: bookCnt++, title, writer };
      bookList.push(book);
      return book;
    },

    // 저자 삭제
    deleteAuthor(parent, { id }) {
      const idx = userList.findIndex((author) => author.id == id);
      let author = {};
      if (idx >= 0) {
        author = userList[idx];
        userList.splice(idx, 1);
      }
      return author;
    },
    // 책 삭제
    deleteBook(parent, { id }) {
      const idx = bookList.findIndex((book) => book.id == id);
      let book = {};
      if (idx >= 0) {
        book = bookList[idx];
        bookList.splice(idx, 1);
      }
      return book;
    },
  },
  // 연쇄 리졸버
  User: {
    // 저자의 books 정보를 검색
    books(parent) {
      const list = [];
      bookList.forEach((book) => {
        if (book.author === parent.name) list.push(book);
      });
      return list;
    },
  },
};

export default resolvers;
