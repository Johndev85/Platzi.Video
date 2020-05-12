const express = require('express')
const joi = require('@hapi/joi')
const MoviesService = require('../services/movies.js')

// import schemas
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies')

const validationHandler = require('../utils/middleware/validationHandler')

const  cacheResponse = require('../utils/cacheResponse')
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS
    } = require('../utils/time')

function moviesApi(app) {
    const router = express.Router()
    app.use("/api/movies", router)

    const moviesService = new MoviesService()

    router.get('/', async function (req, res, next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
        const { tags } = req.query

        try {
            const movies = await moviesService.getMovies({ tags })

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (err) {
            next(err)
        }
    })


    router.get('/:movieId', validationHandler(joi.object({ movieId: movieIdSchema}), 'params'),
    async function (req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS)
        const { movieId } = req.params

        try {
            const movie = await moviesService.getMovie({ movieId })

            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })
        } catch (err) {
            next(err)
        }
    })


    router.post('/', validationHandler(createMovieSchema), async function (req, res, next) {
        const { body: movie } = req

        try {
            const createMovieId = await moviesService.createMovie({ movie })

            res.status(201).json({
                data: createMovieId,
                message: 'Movie created'
            })
        } catch (err) {
            next(err)
        }
    })


    router.put('/:movieId', validationHandler({ movieId: movieIdSchema}, 'params'), validationHandler(updateMovieSchema), async function (req, res, next) {
        const { body: movie } = req
        const { movieId } = req.params

        try {
            const updateMovieId = await moviesService.updateMovieId({ movieId, movie})

            res.status(200).json({
                data: updateMovieId,
                message: 'movie update'
            })
        } catch (err) {
            next(err)
        }
    });
    router.delete('/:movieId', validationHandler({ movieId: movieIdSchema}, 'params'), async function (req, res, next) {
        const { movieId } = req.params

        try {
            const deletedMovieId = await moviesService.deletedMovie({ movieId })

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (err) {
            next(err)
        }
    });

}
module.exports = moviesApi;


