import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react";

@withRouter
@inject('moviesStore')
@observer
class MovieRow extends Component{

    handleOnClick = movie =>{
        const {history, moviesStore} = this.props

        moviesStore.setSelectedMovie(movie)
        history.push(`/${movie.id}`)
    }

    render(){
        const {movie} = this.props
        return(
            <tr onClick={()=> this.handleOnClick(movie)} className="pointer">
                <td>{movie.name}</td>
                <td>{movie.category}</td>
                <td>{movie.year}</td>
            </tr>
        )
    }
}

// const MovieRow = ({movie}) => (
//     <tr className="pointer">
//         <td>{movie.name}</td>
//         <td>{movie.category}</td>
//         <td>{movie.year}</td>
//     </tr>
// )

export default MovieRow