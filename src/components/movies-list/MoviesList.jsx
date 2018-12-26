import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react";
import MovieRow from "./MovieRow";
import {withRouter} from "react-router-dom";


@withRouter
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