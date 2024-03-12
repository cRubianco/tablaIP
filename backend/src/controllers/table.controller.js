const { matchedData } = require('express-validator');

const Addresses = require('../models/table.js');
const { handleHttpError } = require('../utils/handleErrors.js');

/**
 * Obtener todas las direcciones IP.
 * @param {*} req 
 * @param {*} res 
 */
const getAllAddress = async (req, res, next) => {
  const data = await Addresses.find();
  console.log('data  ',data);
  if (data.length > 0) {
    res.send(data)
  } else {
    res.status(404).json({ message: "Not result"})
  }
}

/**
 * Obtener una dirección IP
 * @param {*} req 
 * @param {*} res 
 */
const getAddress = async (req, res, next) => {
  try {
    const data = await Addresses.find();
    res.send({data})
  } catch (e) {
    handleHttpError(res, e);
  }  
}; 

const newAddress = async (req, res, next) => {
  // { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other }
  
  try {
    const body = matchedData(req)
    const data = await Addresses.create(body);
    res.send({data});

  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_ADDRESS");
  }
};

const updateAddress = (req, res, next) => {}; //TODO: implement
const deleteAddress = (req, res, next) => {}; //TODO: implement

module.exports = { getAllAddress, getAddress, newAddress, updateAddress, deleteAddress }