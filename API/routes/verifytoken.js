const jwToken = require("jsonwebtoken");
const verifyJwtToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwToken.verify(authHeader, process.env.JWT_KEY, (err, user) => {
      if (err) res.status(403).json("token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyJwtToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("access is not allowed");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyJwtToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("access is not allowed");
    }
  });
};

module.exports = {
  verifyJwtToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
