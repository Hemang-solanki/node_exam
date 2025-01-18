require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (token) {
      let decode = jwt.verify(token, process.env.SECRET);
      req.body.userId = decode.userID;
      next();
    } else {
      return res.status(401).send({ msg: "Login First" });
    }
  } catch (error) {
    return res.status(403).json({ msg: "Invalid token" });
  }
};

module.exports = isAuth;
