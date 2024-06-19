const router = require('express').Router();

router.use('/address', require('./table.route.js'));
router.use('/users', require('./user.route.js'));

module.exports = router;