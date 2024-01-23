import jwt from "jsonwebtoken";

const getUserIdAtJwt = (userId) => {
  var token = jwt.sign({ userId: userId }, process.env.JWT_SECRET);
  return token;
};
