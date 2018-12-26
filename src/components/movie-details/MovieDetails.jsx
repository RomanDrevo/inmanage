import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react/index";

@withRouter
@inject('moviesStore')
@observer
class MovieDetails extends Component {

    render() {
        const {history, moviesStore} = this.props
        const {selectedMovie} = moviesStore

        console.log(selectedMovie)

        return (
            <div>
                <h1>Movie Details</h1>
                <Button onClick={()=> history.push('/')} bsStyle="primary">Back to movies list</Button>


            </div>
        );
    }
}

export default MovieDetails;
