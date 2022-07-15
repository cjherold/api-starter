require('dotenv').config();
const express = require('express');
const routes = require('./server.routes');
const { engine } = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// handlebars if you want to render and send html
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', '.');

// Connect with routes using / as a base
app.use('/', routes);

app.listen(
	PORT,
	console.log(`${process.env.TEST || 'env not found'}\nServer started on port ${PORT}`)
);
