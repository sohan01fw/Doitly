import { prisma } from "../../prisma/index.js";
import { encryptMethods } from "../Helpers/crypto.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/aysncHandler.js";

export const Signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log({ name, email, password });
  console.log({ email, password });
  //getting encrypted password
  let pswKey = process.env.PASSWORD_SECRET_KEY;
  let encryptPassword = await encryptMethods(password, pswKey);
  try {
    const signUpUser = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptPassword,
      },
    });
    console.log(signUpUser);
    res.send(new ApiResponse(201, "successfully created a user"));
  } catch (error) {
    throw new ApiError(500, "Error while creating user", error);
  }
});
