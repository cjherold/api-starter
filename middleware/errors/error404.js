function error404(req, res, next) {
	const now = new Date();
	const printError = {
		url: req.originalUrl || 'unknown',
		date: now.toLocaleDateString(),
		time: now.toLocaleTimeString(),
	};
	console.error('Error 404: ', JSON.stringify(printError, null, 4));

	return res.status(404).send('Page not found');
}

module.exports = error404;
