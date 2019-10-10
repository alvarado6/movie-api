const express = require('express');
const app = express();
const debug = require("debug")("app:server");

const { config } = require('./config/config');
const moviesApi = require('./routes/movies');

// Body Parse
app.use(express.json());

moviesApi(app);

app.listen(config.port, function() {
    debug(`Listening http://localhost:${config.port}`);
});
