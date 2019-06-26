import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTrial } from "../actions";
import { withRouter } from "react-router-dom";

class TrialSearch extends Component {
  state = {
    filter: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let updatedFilter = this.state.filter.split(" ").join("-");
    this.props.history.push(`/search/${updatedFilter}`);
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="trial-search">
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Enter your search..."
            name="filter"
            value={this.state.filter}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(TrialSearch);
