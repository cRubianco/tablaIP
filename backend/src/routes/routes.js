const router = require('express').Router();

router.use('/address', require('./table.route'));
router.use('/users', require('./user.route'));

module.exports = router;