import userList from "../../dataBase/users.js";

const context = ({ req }) => {
  const token = req.headers.authorization || "";
  console.log(token, "context 에서 토큰!!");
  if (token.length != 64) return { user: null };

  const user = userList.find((user) => user.token === token);
  return { user };
};

export default context;
