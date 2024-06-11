const { check } = require('express-validator');
const validateResults = require('../utils/validate.js')

const validAddress = [
  check("nro").notEmpty().exists(),
  check("address").notEmpty().exists().isIP(),
  check("group").notEmpty(),
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

const validateAddressId = [
  check("id").notEmpty().exists(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const validateIPAddress = [
  check("address").notEmpty().exists().isIP(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

validateUpdateAddress = [
  check("nro").notEmpty(),
  check("address").notEmpty().isIP(),
  check("group"),
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


module.exports = { validAddress, validateAddressId, validateIPAddress, validateUpdateAddress }