const { Router } = require('express')

const { getAllAddress, getAddress, newAddress } = require('../controllers/table.controller.js');
const { validAddress } = require('../utils/validateAddress.js');

const router = Router();

router.get('/', getAllAddress);

router.get('/:addressId', getAddress);

// new address
router.post('/', validAddress, newAddress);

// //Update address
// router.patch('/:addressId', tableController.updateAddress);

// //Delete address
// router.delete('/:addressId', tableController.deleteOneAddress);
 
module.exports = router;