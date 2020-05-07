// creando servidor en Express con NODEJS

const express = require('express')

const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')


// body parser
app.use(express.json())

moviesApi(app)

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`)
})