const { Router } = require('express')

const { getAllUsers, getUser, login, newUser } = require('../controllers/user.controller.js');
const { validUser, validExistUser, validPassword } = require('../utils/validUser');

const router = Router();

/**
 * muestra todos los usuarios
 */
router.get('/', getAllUsers);

router.get('/login', login);

router.get('/:id', getUser);

/**
 * Crea un nuevo usuario
 */
router.post('/',  validUser, newUser);


module.exports = router;