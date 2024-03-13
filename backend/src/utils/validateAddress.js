const { check } = require('express-validator');
const validateResults = require('../utils/validate.js')

const validAddress = [
  check("nro").notEmpty().isNumeric().exists(),
  check("address").notEmpty().exists().isIP(),
  check("group").notEmpty().exists(),
  check("user"), 
  check("pcname"), 
  check("dependency"), 
  check("opersystem"), 
  check("observ"), 
  check("type"), 
  check("other"), 
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validateOneAddress = [
  check("address").notEmpty().exists().isIP(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { validAddress, validateOneAddress }