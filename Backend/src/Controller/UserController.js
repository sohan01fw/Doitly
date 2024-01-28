import { prisma } from "../../prisma/index.js";

export const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(404).json({ msg: "no email or password or name are found" });
    }
    const userRes = await prisma.user.create({
      data: {
        name: "sohan",
        email: "sohan@gmail.com",
        password: "sohnq123",
      },
    });
    console.log(userRes);
  } catch (error) {
    throw new Error(error);
  }
};
export const getUserController = async (req, res) => {
  res.send("hey this is users");
};
