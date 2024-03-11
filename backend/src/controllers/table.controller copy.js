// import * as tablaService from '../services/tabla.service.js'
import Table from '../models/table.js'

export class TableController {

  getAllAddress = () => {}
  // static getAllAddress =  async (req, res) => {
  //   if (addresses.length > 0) {
  //         res.send(addresses)
  //       } else {
  //         res.status(404).json({ message: "Not result"})
  //   }
    // try {
    //   const table = await Table.find();
    //   res.ok(table);
    // }
    // catch (exception) {
    //   res.internalServerError();
    // }
  };
//   
//     const tableRepository = getRepository(address);
//     const addresses = await tableRepository.find();

//     if (addresses.length > 0) {
//       res.send(addresses)
//     } else {
//       res.status(404).json({ message: "Not result"})
//     }

//     // const allAddress = tablaService.getAllAddress();
//     // res.send("get all Address");
//   }


 
//   static getAllAddress =  async (req, res) => {
//     const tableRepository = getRepository(address);
//     const addresses = await tableRepository.find();

//     if (addresses.length > 0) {
//       res.send(addresses)
//     } else {
//       res.status(404).json({ message: "Not result"})
//     }

//     // const allAddress = tablaService.getAllAddress();
//     // res.send("get all Address");
//   }



//   static getOneAddress = async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const table = await Table.findById(addressId);
//       if (table) {
//         res.ok(table);
//       } else {
//         res.notFound().send({ message: `Error la dirección no está en la base de datos: ${err} `});
//       }
//     } catch (exception) {
//       res.internalServerError();
//     }
//   };

// }
  
export default TableController = {
  getAllAddress,
  // getOneAddress,
}


// export class TableController {
//   static getAllAddress =  async (req, res) => {
//     const tableRepository = getRepository(address);
//     const addresses = await tableRepository.find();

//     if (addresses.length > 0) {
//       res.send(addresses)
//     } else {
//       res.status(404).json({ message: "Not result"})
//     }

//     // const allAddress = tablaService.getAllAddress();
//     // res.send("get all Address");
//   }

//   static getById = async (req, res) => {
//     const {addressId} = req.params;
//     const addressRepository = getRepository(address);
//     try {
//       const address = await addressRepository.findOne(addressId);
//       res.send(address)

//     } catch (err) {
//       res.status(404).json({ message: 'Not found'})
//     }
//   }

//   static newAddress = async (req, res) => {
//     const {nro, address, group, user, pcname, dependency, opersystem, observ, type, other} = req.body;
//     const addr = new Address();
    
//     addr.nro = nro;
//     addr.address = address;
//     addr.group = group;
//     addr.user = user;
//     addr.pcname = pcname;
//     addr.dependency = dependency;
//     addr.opersystem = opersystem;
//     addr.observ = observ;
//     addr.type = type;
//     addr.other = other;
//     }
//   }
//   // const getOneAddress = (req, res) => {
//   //   const oneAddress = tablaService.getOneAddress(req.params.addressId);
//   //   res.send(`Get one address ${req.params.addressId}`);
//   // };

//   const createOneAddress = (req, res) => {
//     const {body} = req;
//     if (!body.address || !body.group) {
//       return;
//     }
//     const newAddr = {
//       nro: body.nro,
//       address: body.address,
//       group: body.group,
//       user: body.user,
//       pcname: body.pcname,
//       dependency: body.dependency,
//       opersystem:body.opersystem,
//       observ: body.observ,
//       type: body.type,
//       other: body.other
//     }
//     const newAddress = tablaService.createOneAddress(newAddr);
//     res.status(201).send({status: 'Ok', data: newAddress});
//   };

//   const updateAddress = (req, res) => {
//     const updateAddress = tablaService.updateAddress(req.params.addressId);
//     res.send(`Update address ${req.params.addressId}`);
//   };

//   const deleteOneAddress = (req, res) => {
//     tablaService.deleteOneAddress(req.params.addressId);
//     res.send(`Delete address ${req.params.addressId}`);
//   };

// }

// export default tableController = {
//   getAllAddress,
//   getOneAddress,
//   createOneAddress,
//   updateAddress,
//   deleteOneAddress
// }



// carCtrl.createCar = async (req, res, next) => {
//   try {
//     const car = new Car({
//       brand: req.body.brand,
//       model: req.body.model,
//       category: req.body.category,
//       nroDoors: req.body.nroDoors,
//       price: req.body.price
//     });
//     await car.save();
//     res.created(car);
//   } catch (exception) {
//     res.internalServerError();
//   }
// };


// carCtrl.editCar = async (req, res, next) => {
//   // to be implemented
//   // res.noContent(); or  res.internalServerError(); or  res.notFound();
//   try {
//     const { id } = req.params;
    
//     const car = await Car.updateOne({"_id":id}, {
//       $set:{
//         brand: req.body.brand,
//         model: req.body.model,
//         category: req.body.category,
//         nroDoors: req.body.nroDoors,
//         price: req.body.price
//       }
//     });
//     if (car) {
//       res.ok(car)
//       console.log("se modifico el auto"+ car.brand);

//     } else {
//       res.notFound();
//     }

//   } catch (exception) {
//     res.internalServerError();
//   }
// };

// carCtrl.deleteCar = async (req, res, next) => {
//   // to be implemented
//   // res.noContent(); or  res.internalServerError(); or  res.notFound();
//   try {
//     const { id } = req.params;
//     const car = await Car.findByIdAndRemove(id);
//     if (car) {
//       res.ok(car)
//     }
//   } catch (exception) {
//     res.internalServerError();
//   }

// };

// module.exports = carCtrl;
