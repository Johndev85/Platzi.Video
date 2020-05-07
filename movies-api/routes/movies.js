const express = require('express')
const MoviesService = require('../services/movies.js')
//const { moviesMock } = require('../utils/mocks/movies')


function moviesApi(app) {
    const router = express.Router()
    app.use("/api/movies", router)

    const moviesService = new MoviesService()

    router.get('/', async function (req, res, next) {
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


    router.get('/:movieId', async function (req, res, next) {
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


    router.post('/', async function (req, res, next) {
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


    router.put('/:movieId', async function (req, res, next) {
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
    router.delete('/:movieId', async function (req, res, next) {
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


