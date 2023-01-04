import userList from "../../dataBase/userList.js";

const context = ({ req }) => {
  const token = req.headers.authorization || "";
  if (token.length != 64) return { user: null };

  const user = userList.find((user) => user.token === token);
  return { user };
};

export default context;
