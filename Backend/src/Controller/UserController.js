import { asyncHandler } from "../../utils/aysncHandler.js";
import cookieToken from "../../utils/cookieToken.js";
import { prisma } from "./../../prisma/index.js";

export const createUserController = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      res.status(404).json({ msg: "no email or password or name are found" });
    }

    const User = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    cookieToken(User, res);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});
export const getUserController = async (req, res) => {
  res.send("hey this is users");
};
