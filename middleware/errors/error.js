function error(err, req, res, next) {
	// Get thrown errors
	if (err) {
		const now = new Date();
		const printError = {
			message: err.message || '',
			url: req.originalUrl || 'unknown',
			date: now.toLocaleDateString(),
			time: now.toLocaleTimeString(),
		};
		console.error('Error: ', JSON.stringify(printError, null, 4));

		return res.status(500).send('Something went wrong.');
	}

	// Not a thrown error, pass to 404 handler (order matters for this in server.routes)
	next();
}

module.exports = error;
