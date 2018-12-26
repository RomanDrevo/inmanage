import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react";

class MovieRow extends Component{

    componentDidMount(){
        console.log('row props: ', this.props)
    }

    render(){
        const {movie} = this.props
        return(
            <tr>
                <td>{movie.name}</td>
                <td>{movie.category}</td>
                <td>{movie.year}</td>
            </tr>
        )
    }
}



@inject('moviesStore')
@observer
class MoviesList extends Component {

    render() {
        const {moviesStore} = this.props

        return (
            <div>
                <h1> Movies List</h1>

                <input placeholder="Search" className="search-bar" value={moviesStore.search} onChange={moviesStore.updateSearch}/>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        moviesStore.sortedMovies.map(movie => <MovieRow key={movie.id} movie={movie} />)
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MoviesList;