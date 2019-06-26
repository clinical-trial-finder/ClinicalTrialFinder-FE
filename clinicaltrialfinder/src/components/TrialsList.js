import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
// add withrouter from 'react-router-dom'
// import getData api call from actions

class TrialsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Check props</h2>
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
