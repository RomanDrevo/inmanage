import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";

@withRouter
class MovieDetails extends Component {

    render() {
        const {history} = this.props

        return (
            <div>
                <h1>Movie Details</h1>
                <Button onClick={()=> history.push('/')} bsStyle="primary">Back to movies list</Button>


            </div>
        );
    }
}

export default MovieDetails;
