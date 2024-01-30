export const Signup = asyncHandler((req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
});
