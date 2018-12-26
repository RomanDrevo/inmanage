import {observable, action, runInAction, computed} from "mobx";
import axios from 'axios'
import Movie from "../models/Movie";

export default class MoviesStore{

    @observable isLoading = false
    @observable movies = []
    @observable search = ''



    @action
    async getMovies(){
        this.isLoading = true
        try {
            const movies = await axios.get('http://x-mode.co.il/exam/allMovies/allMovies.txt')
            console.log(movies)

            runInAction(()=> this.movies = movies.data.movies.map(json => Movie.reconstituteFrom(json)))
        }
        catch (e) {
            console.log({e})
        }
        finally {
            this.isLoading = false
            console.log('Movies: ', this.movies)
        }
    }

    @computed get filteredMovies() {
        return this.movies.filter(
            movie => {
                return movie.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
                    movie.category.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
            })
    }

    @action
    updateSearch = (e) => {
        this.search = e.target.value
    }

}