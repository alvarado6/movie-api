const MongoLib = require('../lib/mongo');

class UserMoviesService {
    constructor(){
        this.collection = 'user-movies';
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoDB.getAll(this.collection, query);
        return userMovies || [];
    }

    async createUserMovies({ userMovie }) {
        const createUserMoviesId = await this.mongoDB.create(this.collection, userMovie);
        return createUserMoviesId;
    }

    async deleteUserMovies({ userMovieId }) {
        const deleteUserMoviesId = await this.mongoDB.delete(this.collection, userMovieId);
        return deleteUserMoviesId;
    }
}

module.exports = UserMoviesService;