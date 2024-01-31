export const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      const result = await fn(req, res, next);

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};
