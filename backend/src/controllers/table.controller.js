const Addresses = require('../models/table')

/**
 * Obtener todas las direcciones IP.
 * @param {*} req 
 * @param {*} res 
 */
const getAllAddress = async (req, res) => {
  const data = await Addresses.find();
  console.log('data  ',data);
  res.send({data})
}
// const getAllAddress = async (req, res) => {
//   // const addresses = await Addresses.find({});
 
//   console.log('=====hola====');

//   res.send(addresses)
//   const addresses = await Addresses.find();
//   res.json(addresses);
// };
  // try {
  //   const addr = await Addresses.find();
  //   res.ok(addr);
  // } catch (exception) {
  //   console.error(exception);
  // }
// };

/**
 * Obtener una dirección IP
 * @param {*} req 
 * @param {*} res 
 */
const getAddress = (req, res) => {
  const data = ["hola", "mundo"]
  res.send({data})
}; //TODO: implement

const createAddress = async (req, res) => {
  //TODO: implement
  const { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } = req.body;
  const addr = new Addresses();

  addr.nro = nro;
  addr.address = address;
  addr.grupo = grupo;
  addr.user = user;
  addr.pcname = pcname;
  addr.dependency = dependency;
  addr.opersystem = opersystem;
  addr.observ = observ;
  addr.type = type;
  addr.other = other;

  const errors = await validate(addr);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

 
};
 
const updateAddress = (req, res) => {}; //TODO: implement
const deleteAddress = (req, res) => {}; //TODO: implement

module.exports = { getAllAddress, getAddress, createAddress, updateAddress, deleteAddress }

// Agrega una persona a la base
// ctrlerAddress.addAddress = async (req, res, next) => {
//   try {
//     const addr = new Addresses({
//       nro: req.body.nro,
//       address: req.body.address,
//       grupo: req.body.grupo,
//       user: req.body.user,
//       pcname: req.body.pcname,
//       dependency: req.body.dependency,
//       opersystem: req.body.opersystem,
//       observ: req.body.observ,
//       type: req.body.type,
//       other: req.body.other,
//     });
   
//     await addr.save();
//     res.created(addr);
//   } catch (exception) {
//     res.internalServerError();
//   }
// };

// module.exports = ctrlerAddress;