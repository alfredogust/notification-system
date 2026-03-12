const authService = require("../services/authService");

exports.login = (req, res) => {

  try {

    const { email, password } = req.body;

    const token = authService.login(email, password);

    res.json({ token });

  } catch (error) {

    res.status(401).json({
      error: error.message
    });

  }

};