const { check } = require('express-validator');
const validateResults = require('../utils/validate.js')

const validAddress = [
  check("nro").exists().isNumeric().notEmpty(),
  check("address").exists().isIP().notEmpty(),
  check("grupo").exists().isAlpha().notEmpty(),
  
  (req, res, next) => {
    return validateResults(req, res, next);
  }

];


module.exports = { validAddress }