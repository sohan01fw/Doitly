import jwt from "jsonwebtoken";

const getUserIdAtJwt = (userId) => {
  var token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: "1 day",
  });
  return token;
};

export default getUserIdAtJwt;
