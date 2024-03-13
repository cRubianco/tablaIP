const { matchedData } = require('express-validator');

const Addresses = require('../models/table.js');
const { handleHttpError } = require('../utils/handleErrors.js');

/**
 * Obtener todas las direcciones IP.
 * @param {*} req 
 * @param {*} res 
 */
const getAllAddress = async (req, res, next) => {
  try {
    const data = await Addresses.find();
    res.send(data)
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ADDRESSES");
  }
}

/**
 * Obtener una dirección IP
 * @param {*} req 
 * @param {*} res 
 */
const getAddress = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await Addresses.findById(body.id);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ADDRESS");
  }  
}; 

/**
 * Obtener una dirección IP
 * @param {*} req 
 * @param {*} res 
 */
const getIPAddress = async (req, res, next) => {
  try {
    console.log('===HOLA IP ====');
    const body = req.body;
    const cleanBody = matchedData(req);
    console.log('===HOLA IP ====',req);
    const {id} = req;
    const data = await Addresses.findOne(id);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_IP_ADDRESS");
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

const updateAddress = async (req, res, next) => {}; //TODO: implement
const deleteAddress = async (req, res, next) => {}; //TODO: implement

module.exports = { getAllAddress, getAddress, getIPAddress, newAddress, updateAddress, deleteAddress }