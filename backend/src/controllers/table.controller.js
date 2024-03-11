const Addresses = require('../models/table')

/**
 * Obtener todas las direcciones IP.
 * @param {*} req 
 * @param {*} res 
 */
const getAllAddress = async (req, res) => {
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
const getAddress = (req, res) => {
  const data = ["hola", "mundo"]
  res.send({data})
}; //TODO: implement

const newAddress = async (req, res) => {
  //TODO: implement
  const { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } = req.body;
  console.log('req.body  -> ',req.body);
  try {
    const addr = new Addresses(req.body);
    console.log('req.body  -> ', addr);
    // addr.nro = nro;
    // addr.address = address;
    // addr.grupo = grupo;
    // addr.user = user;
    // addr.pcname = pcname;
    // addr.dependency = dependency;
    // addr.opersystem = opersystem;
    // addr.observ = observ;
    // addr.type = type;
    // addr.other = other;
    // await addr.save();
    res.status(201).send({status: 'Ok', data: addr.data});

  } catch (err) {
    res.status(500).send({status: 'Error', message: "No se pudo crear la dirección IP"})
  }
 
};
 
const updateAddress = (req, res) => {}; //TODO: implement
const deleteAddress = (req, res) => {}; //TODO: implement

module.exports = { getAllAddress, getAddress, newAddress, updateAddress, deleteAddress }

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