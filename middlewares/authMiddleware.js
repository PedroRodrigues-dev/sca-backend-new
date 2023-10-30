const { verifyToken } = require('../config/auth');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Token de autenticação inválido' });
  }

  req.user = decodedToken; 
  next();
}

module.exports = authMiddleware;
