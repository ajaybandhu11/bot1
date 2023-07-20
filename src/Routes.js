import React, { Component } from "react";
import { Route } from "react-router-dom";
import Onepage from "./containers/Page1/Onepage";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/onepage/" component={Onepage} />
      </div>
    );
  }
}
