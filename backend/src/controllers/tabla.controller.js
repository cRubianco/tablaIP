import * as tablaService from '../services/tabla.service.js'

export class TableController {
  static getAllAddress =  async (req, res) => {
    const tableRepository = getRepository(address);
    const addresses = await tableRepository.find();

    if (addresses.length > 0) {
      res.send(addresses)
    } else {
      res.status(404).json({ message: "Not result"})
    }

    // const allAddress = tablaService.getAllAddress();
    // res.send("get all Address");
  }

  static getById = async (req, res) => {
    const {addressId} = req.params;
    const addressRepository = getRepository(address);
    try {
      const address = await addressRepository.findOne(addressId);
      res.send(address)

    } catch (err) {
      res.status(404).json({ message: 'Not found'})
    }
  }

  static newAddress = async (req, res) => {
    const {nro, address, group, user, pcname, dependency, opersystem, observ, type, other} = req.body;
    const addr = new Address();
    
    addr.nro = nro;
    addr.address = address;
    addr.group = group;
    addr.user = user;
    addr.pcname = pcname;
    addr.dependency = dependency;
    addr.opersystem = opersystem;
    addr.observ = observ;
    addr.type = type;
    addr.other = other;
    }
  }
  // const getOneAddress = (req, res) => {
  //   const oneAddress = tablaService.getOneAddress(req.params.addressId);
  //   res.send(`Get one address ${req.params.addressId}`);
  // };

  const createOneAddress = (req, res) => {
    const {body} = req;
    if (!body.address || !body.group) {
      return;
    }
    const newAddr = {
      nro: body.nro,
      address: body.address,
      group: body.group,
      user: body.user,
      pcname: body.pcname,
      dependency: body.dependency,
      opersystem:body.opersystem,
      observ: body.observ,
      type: body.type,
      other: body.other
    }
    const newAddress = tablaService.createOneAddress(newAddr);
    res.status(201).send({status: 'Ok', data: newAddress});
  };

  const updateAddress = (req, res) => {
    const updateAddress = tablaService.updateAddress(req.params.addressId);
    res.send(`Update address ${req.params.addressId}`);
  };

  const deleteOneAddress = (req, res) => {
    tablaService.deleteOneAddress(req.params.addressId);
    res.send(`Delete address ${req.params.addressId}`);
  };

}

export default tableController = {
  getAllAddress,
  getOneAddress,
  createOneAddress,
  updateAddress,
  deleteOneAddress
}