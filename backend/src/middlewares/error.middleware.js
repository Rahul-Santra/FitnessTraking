const errorMiddleware = (
  error,
  req,
  res,
  next
) => {
  error.statusCode =
    error.statusCode || 500;

  error.status =
    error.status || "error";

  console.error(
    "ERROR 💥",
    error.message
  );

  res.status(
    error.statusCode
  ).json({
    success: false,

    status:
      error.status,

    message:
      error.message,

    stack:
      process.env.NODE_ENV ===
      "development"
        ? error.stack
        : undefined,
  });
};

export default errorMiddleware;