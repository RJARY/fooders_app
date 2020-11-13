import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Product from "./Product";
import Bill from "./Bill";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Bill" exact component={Bill} />
                    <Route path="/Product" exact component={Product} />
                </Switch>
            </Router>
        )
    }
}