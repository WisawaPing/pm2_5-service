import jwt from "jsonwebtoken";
import hash from "../config/hash.js"; // ที่คุณเก็บ jwtSecret

export default function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      response_status: "ERROR",
      message: "No token provided",
    });
  }

  jwt.verify(token, hash.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({
        response_status: "ERROR",
        message: "Invalid token",
      });
    }
    req.user = user;
    next();
  });
}
