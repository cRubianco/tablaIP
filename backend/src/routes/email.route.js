nro: , dependency: , address: , passwd: , user: , observ: , other: 
const { Router } = require('express')

const { getAllEmail, getEmail, newEmail, updateEmail, deleteEmail } = require('../controllers/email.controller.js');
const { validEmail, validateEmailId, validateEmail, validateUpdateEmail } = require('../utils/validateEmail.js');

const router = Router();

/**
 * Lista todas las direcciones de mail
 */
router.get('/', getAllEmail);

/**
 * Lista una dirección de mail
 */
router.get('/:id', validateEmailId , getEmail);

/**
 * Lista una dirección de mail
 */
router.get('/ip/:email', validateEmail, getEmail);

/**
 * Crea una nueva dirección de mail
 */
router.post('/', validEmail, newEmail);

/**
 * Actualiza una dirección de mail
 */
router.put('/:id', validateEmailId, validateUpdateEmail, updateEmail);

// //Delete address
router.delete('/:id', validateEmailId, deleteEmail);
 
module.exports = router;