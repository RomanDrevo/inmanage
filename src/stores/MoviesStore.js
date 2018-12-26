import {observable, action, runInAction, computed} from "mobx";
import axios from 'axios'
import Movie from "../models/Movie";

export default class MoviesStore{

    @observable isLoading = false
    @observable movies = []
    @observable search = ''
    @observable selectedMovie = null


    // @action
    // setSelectedMovie = movie =>{
    //     axios.get(`http://x-mode.co.il/exam/descriptionMovies/${movie.id}.txt`)
    //         .then(res => console.log(res))
    //
    //     this.selectedMovie = movie
    // }

    @action
    async setSelectedMovie (movie){
        const myMovie = movie
        this.isLoading = true
        try {
            const movie = await axios.get(`http://x-mode.co.il/exam/descriptionMovies/${myMovie.id}.txt`)
            runInAction(()=> this.selectedMovie = movie.data)
        }
        catch (e) {
            console.log(e)
        }
        finally {
            this.isLoading = false
            // console.log('this selected mov: ', this.selectedMovie)
        }
    }

    @action
    async getMovies(){
        this.isLoading = true
        try {
            const movies = await axios.get('http://x-mode.co.il/exam/allMovies/allMovies.txt')
            runInAction(()=> this.movies = movies.data.movies.map(json => Movie.reconstituteFrom(json)))
        }
        catch (e) {
            console.log({e})
        }
        finally {
            this.isLoading = false
        }
    }

    @computed get filteredMovies() {
        return this.movies.filter(
            movie => {
                return movie.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 })

    }

    @computed get sortedMovies (){
        return this.filteredMovies.sort((a, b)=> {
            return new Date(b.year) - new Date(a.year);
        })
    }

    @action
    updateSearch = (e) => {
        this.search = e.target.value
    }

}