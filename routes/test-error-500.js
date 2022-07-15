const router = require('express').Router();

// Just throws a 500 error to show how error handling works
router.route('/').get(async (req, res, next) => {
	try {
		throw new Error('500 test');
		return null;
	} catch (err) {
		next(err);
	}
});

module.exports = router;
