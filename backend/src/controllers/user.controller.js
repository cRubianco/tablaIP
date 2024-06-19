const { matchedData } = require('express-validator');

const User = require('../models/user.js');
const { handleHttpError } = require('../utils/handleErrors.js');

/**
 * Obtener todos los usuarios.
 * @param {*} req 
 * @param {*} res 
 */
const getAllUsers = async (req, res, next) => {
  try {
    const data = await User.find();
    res.send(data)
  } catch (err) {
    handleHttpError(res, "ERROR_GET_USERS");
  }
}

/**
 * Obtener un usuario por ID
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await User.findById(body.id);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USER");
  }  
}; 

const login = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await User.findOne(body);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }  
}; 

const newUser = async (req, res, next) => {
  // { username: , passwd: ,  role: } 
  try {
    const body = matchedData(req);
    const data = await User.create(body);
    res.send({data});
  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_USER");
  }
};

module.exports = { getAllUsers, getUser, login, newUser };