import getUserIdAtJwt from "./jwtToken.js";

const cookieToken = (user, res) => {
  const token = getUserIdAtJwt(user.id);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;
  res.status(200).cookie("Doitly", token, options).json({
    success: true,
    token,
    user,
  });
};

export default cookieToken;
