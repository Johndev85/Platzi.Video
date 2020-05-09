
// verifica si es verdad o no la comparación en los test
const assert = require('assert')

// cada vez que se haga un require
// permite elegir un mod en vez de un paquete real
const proxyquire = require('proxyquire')

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies')
const testserver = require('../utils/testServer')

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    })

    const request = testserver(route)
    describe('GET /movies', function () {
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done)
        })

        it('should respond with the list of movies', function (done) {
            request.get('/api/movies').end((err, res) => { // eslint-disable-line
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                })
            })
            done()
        })
    })
})
