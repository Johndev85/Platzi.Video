const boom = require('@hapi/boom')

function noFoundHandler(req, res) {
    const {
        output: { statusCode , payload }
    } = boom.notFound()

    res.status(statusCode).json(payload)
}

module.exports = noFoundHandler
