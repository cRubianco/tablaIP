const { matchedData } = require('express-validator');

const Address = require('../models/table.js');
const { handleHttpError } = require('../utils/handleErrors.js');

/**
 * Obtener todas las direcciones IP.
 * @param {*} req 
 * @param {*} res 
 */
const getAllAddress = async (req, res, next) => {
  try {
    const data = await Address.find();
    res.send(data)
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ADDRESSES");
  }
}

/**
 * Obtener una dirección IP por ID
 * @param {*} req 
 * @param {*} res 
 */
const getAddress = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await Address.findById(body.id);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ADDRESS");
  }  
}; 

/**
 * Obtener una dirección IP por IP
 * @param {*} req 
 * @param {*} res 
 */
const getIPAddress = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await Address.findOne(body);
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_GET_IP_ADDRESS");
  }  
}; 

const newAddress = async (req, res, next) => {
  // { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } 
  try {
    const body = matchedData(req)
    const data = await Address.create(body);
    res.send({data});
  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_ADDRESS");
  }
};

/**
 * Actualizar una dirección IP
 * @param {*} req 
 * @param {*} res 
 */
const updateAddress = async (req, res, next) => {
  try {
    const {nro, address, group, user, pcname, dependency, opersystem, observ, type, other} = req.body
    // { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } 
    let tmpAddr = await Address.findById(req.params.id);
    if (!tmpAddr) {
      res.status(404).json({msg: 'No existe la dirección IP'})
    }  
    
    tmpAddr.nro = nro, 
    tmpAddr.address = address, 
    tmpAddr.group = group, 
    tmpAddr.user = user, 
    tmpAddr.pcname = pcname,
    tmpAddr.dependency = dependency, 
    tmpAddr.opersystem = opersystem,
    tmpAddr.observ = observ,
    tmpAddr.type = type,
    tmpAddr.other = other

    tmpAddr = await Address.findByIdAndUpdate({_id: req.params.id}, tmpAddr, {new: true})

    res.json(tmpAddr);
  } catch (err) {
    console.log('no actualizo: ' + err.message );
    handleHttpError(res, "ERROR_UPDATE_ADDRESS");
  }
}; 

const deleteAddress = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const data = await Address.deleteOne({_id:body.id});
    res.send({data})
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ADDRESS");
  }   
}; 

module.exports = { getAllAddress, getAddress, getIPAddress, newAddress, updateAddress, deleteAddress }