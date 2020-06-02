// creando servidor en Express con NODEJS

const express = require('express')

const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')


// others middlewares
const { logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers.js')

const notFoundHandler = require('./utils/middleware/noFoundHandler')

// body parser
app.use(express.json())

// routes
moviesApi(app)

// Catch 404
app.use(notFoundHandler)


// Erros middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`)
})