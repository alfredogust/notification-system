const jwt = require("jsonwebtoken");
const users = require("../config/users");

class AuthService {

  login(email, password) {

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    );

    return token;
  }

}

module.exports = new AuthService();