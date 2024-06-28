const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.json({ error: "La cabezera no tiene el token"})
  }

  const token = req.headers['authorization'];
  let payload; 
  try {
    payload = jwt.verify(token, 'secretword');
  } catch (error) {
    return res.json({ error: 'El token es incorrecto'});
  }

  next();
  
}

module.exports = { checkToken }