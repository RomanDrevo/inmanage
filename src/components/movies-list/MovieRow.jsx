import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

@withRouter
class MovieRow extends Component{
    render(){
        const {movie, history} = this.props
        return(
            <tr onClick={()=> history.push(`/${movie.id}`)} className="pointer">
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