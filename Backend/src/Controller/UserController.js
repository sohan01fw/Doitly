import { asyncHandler } from "../../utils/aysncHandler.js";

export const createUserController = asyncHandler((req, res) => {
  res.send("hey");
});
export const getUserController = async (req, res) => {
  res.send("hey this is users");
};
