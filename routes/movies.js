const express = require ('express');
const MovieService = require ('../services/movie');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router);

    const moviesService = new MovieService();

    router.get("/", async function(req, res, next){
        const { tags } =req.query;
        try{
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                mesagge: 'movies listed'
            });

        }catch(err){
            next(err);
        }
    });

    router.get("/:movieId", async function(req, res, next){
        const { movieId } = req.params;
        try{
            const movies = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data: movies,
                mesagge: 'movie retrieve'
            });

        }catch(err){
            next(err);
        }
    });

    router.post("/", async function(req, res, next){
        const { body:movie } = req;
        try{
            const createdMovieId = await moviesService.createMovie({ movie });

            res.status(200).json({
                data: createdMovieId,
                mesagge: 'movies created'
            });

        }catch(err){
            next(err);
        }
    });

    router.put("/:movieId", async function(req, res, next){
        const { body:movie } = req;
        const { movieId } = req.params;
        try{
            const updatedMovieId = await moviesService.updateMovie({movieId, movie});

            res.status(200).json({
                data: updatedMovieId,
                mesagge: 'movie updated'
            });

        }catch(err){
            next(err);
        }
    });

    router.delete("/:movieId", async function(req, res, next){
        const { movieId } = req.params;
        try{
            const deletedMovieId = await moviesService.deleteMovie({movieId});

            res.status(200).json({
                data: deletedMovieId,
                mesagge: 'movie deleted'
            });

        }catch(err){
            next(err);
        }
    });
}

module.exports = moviesApi;