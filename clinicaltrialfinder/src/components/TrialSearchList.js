import React, { Component } from "react";
import TrialsList from "../views/TrialsList";
import TrialSearch from "./TrialSearch";
import { connect } from "react-redux";
import { searchTrial } from "../actions";
import Trials from "./Trials";

class TrialSearchList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.searchTrial(this.props.match.params.query);
  }

  render() {
    return (
      <div>
        <TrialSearch />
        <Trials trials={this.props.conditions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions
});

export default connect(
  mapStateToProps,
  { searchTrial }
)(TrialSearchList);
