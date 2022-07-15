const router = require('express').Router();
const people = require('./data/people.data');

// Sends an array of people data
router.route('/').get(async (req, res, next) => {
	try {
		return res.json({
			people,
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
