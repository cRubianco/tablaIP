const { matchedData } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/user.js');
const { handleError, handleHttpError } = require('../utils/handleErrors.js');

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
 * Obtener un usuario 
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await User.findOne(body.username);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USER");
  }  
}; 

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.json({ error: 'Usuario inexistente' });
    }
    const pass = bcrypt.compareSync(req.body.password, user.password)
    if (!pass) {
      return res.json({ error: 'Error en usuario/contraseña' });
    }
    res.send({user})
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }  
}; 

const register = async (req, res) => {

  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.json({ error: 'El usuario ya está registrado' });
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    // const body = matchedData(req);
    const data = await User.create(req.body);
    res.json(data);

  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_USER");
  }  
  
};

module.exports = { getAllUsers, getUser, login, register };