import React, { Component } from "react";
import TrialsList from "../views/TrialsList";
import TrialSearch from "./TrialSearch";
import { connect } from "react-redux";
import { searchTrial } from "../actions";
import Trials from "./Trials";
import { Link } from "react-router-dom";

class TrialSearchList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.searchTrial(this.props.match.params.query);
  }

  render() {
    // if (this.props.conditions === []) {
    //   return <h2>Oops! No results found...</h2>
    //   <Link to="/protected">Lets try again</Link>
    // }
    return (
      <div className="trial-search-list">
        ><Link to="/protected">Make Another Search</Link>
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
