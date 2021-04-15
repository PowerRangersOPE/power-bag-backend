const jwt = require('jsonwebtoken');

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (error) {
    throw error;
  }
};

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { cliente } = validateToken(authorization);
    req.cliente = cliente;
    return next();
  } catch ({ message }) {
    return res.status(403).json({ message });
  }
};
