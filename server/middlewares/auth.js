const auth = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization)
    return res.status(401).send("User not authorized");
  next();
};

export default auth;
