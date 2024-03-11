const { Router } = require('express')

const { getAllAddress, getAddress } = require('../controllers/table.controller.js')

const router = Router();

router.get('/', getAllAddress);

router.get('/:addressId', getAddress);

// // new address
// router.post('/', tableController.createOneAddress);

// //Update address
// router.patch('/:addressId', tableController.updateAddress);

// //Delete address
// router.delete('/:addressId', tableController.deleteOneAddress);
 
module.exports = router;