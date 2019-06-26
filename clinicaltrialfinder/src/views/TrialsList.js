import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Trials from "../components/Trials";
// add withrouter from 'react-router-dom'
// import getData api call from actions

class TrialsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("trial list this.props", this.props.conditions);
    return (
      <div className="trial-list">
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
  { getData }
)(TrialsList);
