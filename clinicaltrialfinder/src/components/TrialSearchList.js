import React, { Component } from "react";
import TrialsList from "../views/TrialsList";
import TrialSearch from "./TrialSearch";
import { connect } from "react-redux";
import { searchTrial } from "../actions";

class TrialSearchList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.searchTrial(this.props.match.params.query);
  }

  render() {
    return (
      <div>
        <TrialSearch />
        <TrialsList />
      </div>
    );
  }
}

export default connect(
  null,
  { searchTrial }
)(TrialSearchList);
