const router = require('express').Router();
// const homepage = require('../index.html');

router.route('/').get(async (req, res, next) => {
	try {
		return res.render('index', {
			layout: false,
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
