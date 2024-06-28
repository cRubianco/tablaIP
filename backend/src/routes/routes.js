const router = require('express').Router();
const { checkToken } = require('../utils/validToken.js')

router.use('/address', checkToken, require('./table.route.js'));
router.use('/users', require('./user.route.js'));

module.exports = router;