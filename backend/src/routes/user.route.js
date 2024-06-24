const { Router } = require('express')

const { getAllUsers, getUser, login, register } = require('../controllers/user.controller.js');
const { validUser, validPassword } = require('../utils/validUser');

const router = Router();

/**
 * muestra todos los usuarios
 */
router.get('/', getAllUsers);

router.post('/login', login);

router.get('/:id', getUser);

router.post('/register', validUser, validPassword, register);

module.exports = router;