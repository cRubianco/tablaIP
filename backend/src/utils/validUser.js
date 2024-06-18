const { check, validationResult } = require('express-validator');
const validateResults = require('../utils/validate.js')

const validExistUser = [
  check("username", 'El usuario ya existe').exists(), 
  (req, res, next) => {
    console.log('valid -- '.req.body);
    return validateResults(req, res, next);
  }
];

const validUser = [
  check("username", 'El usuario debe tener mas de 6 caracteres y menos de 15').isLength({min:5, max:8}),
  check("password", 'La contraseña debe tener mas de 6 caracteres y menos de 15').isLength({min:5, max:8}), 
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validPassword = [
  check("password", 'La contraseña no puede estar vacia, o debe ser mayor a 4 caracteres y menor a 15').isLength({min:4, max:15}), 
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validUser, validExistUser, validPassword }
