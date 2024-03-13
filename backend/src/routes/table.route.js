const { Router } = require('express')

const { getAllAddress, getAddress, newAddress } = require('../controllers/table.controller.js');
const { validAddress, validateOneAddress } = require('../utils/validateAddress.js');

const router = Router();

/**
 * Lista todas las direcciones IP
 */
router.get('/', getAllAddress);

/**
 * Lista una dirección IP
 */
router.get('/:id', validateOneAddress , getAddress);

/**
 * Crea una nueva dirección IP
 */
router.post('/', validAddress, newAddress);

// //Update address
// router.patch('/:addressId', tableController.updateAddress);

// //Delete address
// router.delete('/:addressId', tableController.deleteOneAddress);
 
module.exports = router;