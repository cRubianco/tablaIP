const { Router } = require('express')

const { getAllAddress, getAddress, getIPAddress, newAddress, updateAddress } = require('../controllers/table.controller.js');
const { validAddress, validateAddressId, validateIPAddress, validateUpdateAddress } = require('../utils/validateAddress.js');

const router = Router();

/**
 * Lista todas las direcciones IP
 */
router.get('/', getAllAddress);

/**
 * Lista una dirección IP
 */
router.get('/:id', validateAddressId , getAddress);

/**
 * Lista una dirección IP
 */
router.get('/ip/:address', validateIPAddress, getIPAddress);

/**
 * Crea una nueva dirección IP
 */
router.post('/', validAddress, newAddress);

/**
 * Actualiza una dirección IP
 */
router.put('/:id', validateAddressId, validateUpdateAddress, updateAddress);

// //Delete address
// router.delete('/:addressId', deleteAddress);
 
module.exports = router;