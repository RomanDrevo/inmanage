import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react/index";
import './MovieDetails.css'


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
                <Link to="/" >Back to movies list</Link>

                <Row className="mt-5 jumbotron">
                    <Col sm={5}>
                        <img alt={selectedMovie.name} src={selectedMovie.imageUrl} />
                    </Col>
                    <Col sm={7}>
                        <div className="movie-description flex flex-column">
                            <h1>{selectedMovie.name}</h1>
                            <div className="flex movie-details">
                                <span className="mr-2">Hour: <b>{selectedMovie.hour}</b></span>
                                <span className="mr-2">Category: <b>{selectedMovie.category}</b></span>
                                <span className="mr-2">Rate: <b>{selectedMovie.rate}</b></span>
                            </div>
                            <p className='border-top'>
                                {selectedMovie.description}
                            </p>
                            <h3><a className="trailer" target='_blank' href={selectedMovie.promoUrl}>Watch trailer</a></h3>
                        </div>
                    </Col>
                </Row>


            </div>
        );
    }
}

export default MovieDetails;
