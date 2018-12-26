import MoviesStore from './stores/MoviesStore'

const bootstrapper = () =>{
    const moviesStore = new MoviesStore()

    return {
        moviesStore
    }
}

export default bootstrapper