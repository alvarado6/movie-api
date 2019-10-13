const boom = require('@hapi/boom');

function NotFoundHandler(req, res) {
    const{
        output: { statusCode, payload } 
    } = boom.notFound();

    res.status(statusCode).json(payload);
}

module.exports = (NotFoundHandler);