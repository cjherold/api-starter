const router = require('express').Router();

// Paths
const index = require('./routes');
const testError500 = require('./routes/test-error-500');
const people = require('./routes/people');

// Middleware

// Routes
router.use('/', index);
router.use('/test-error-500', testError500);
router.use('/people', people);

// Erorr handling
router.use(require('./middleware/errors/error'));
router.use(require('./middleware/errors/error404'));

module.exports = router;
