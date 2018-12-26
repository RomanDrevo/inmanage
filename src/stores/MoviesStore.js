import {observable, action, runInAction} from "mobx";
import axios from 'axios'
import Movie from "../models/Movie";

export default class MoviesStore{

    @observable isLoading = false

    @observable movies = []

    // @action
    // getPosts = () =>{
    //     // console.log('here')
    //     axios.get('db.json').then((res)=> console.log({res}))
    // }

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

}