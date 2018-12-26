import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import {inject, observer} from "mobx-react";
import {Col, Grid, Row} from "react-bootstrap";

@inject('moviesStore')
@observer
class App extends Component {

    componentDidMount() {
        const {moviesStore} = this.props


        moviesStore.getMovies()
    }

    render() {
        const {moviesStore} = this.props

        if (moviesStore.isLoading)
            return <div>Loading...</div>


        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <Switch>
                            <Route exact path="/" component={}/>
                            <Route exact path="/personal" component={Personal}/>
                            <Route exact path="/benefits/:benefitId" component={Benefit}/>
                            <Route exact path="/featured/benefits"
                                   component={() => <FeaturedBenefits benefits={this.props.benefitsStore.suggestedBenefits}
                                                                      title="מותאם בשבילך"/>}/>
                            <Route exact path="/faq" component={Faq}/>
                            <Route exact path="/contact-us" component={ContactUs}/>
                            <Route exact path="/redeem/:benefitId" component={BenefitRedemption}/>
                            <Route exact path="/businesses/:businessId" component={Business}/>
                            <Route exact path="/businesses" component={Companies}/>
                            <Route exact path="/favorites" component={Favorites}/>
                            <Route exact path="/category-benefits/:categoryId" component={() => <CategoryBenefits/>}/>
                            <Route exact path="/registration" component={Registration}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/tos" component={Tos}/>
                            <Route exact path="/search" component={DesktopSearch}/>
                            <Redirect to="/"/>
                        </Switch>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
