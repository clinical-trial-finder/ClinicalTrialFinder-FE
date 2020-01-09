import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { searchTrial } from '../actions';
import { withRouter } from 'react-router-dom';

class TrialSearch extends Component {
  state = {
    filter: '',
    gender: '',
    studyType: '',
    health: '',
    predProb: '',
    maxAge: '',
    minAge: '',
  };

  onSubmit = e => {
    e.preventDefault();
    let updatedFilter = this.state.filter.split(' ').join('-');
    this.props.history.push(`/search/${updatedFilter}`);
  };

  onSubmitReq = e => {
    e.preventDefault();
    let updatedFilter = this.state.filter.split(' ').join('-');
    this.props.history.push(`/search/${updatedFilter}`);
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='trial-search'>
        {/* <h2>Customize your search</h2> */}
        {/* <h3>Specify the requirements of the clinical trial here:</h3>
        <p>Leave entries blank for no preference</p>
        <form onSubmitReq={this.onSubmitReq}>
          <p>Gender</p>
          <input
            placeholder='male, female or all'
            name='gender'
            value={this.state.gender}
            onChange={this.handleChanges}
            className='search-input'
          />
          <p>Study Type</p>
          <p className='study-type-form'>
            'Interventional', 'Observational', or 'Expanded Access'
          </p>
          <input
            placeholder='Enter Study Type'
            name='studyType'
            value={this.state.studyType}
            onChange={this.handleChanges}
            className='search-input'
          />
          <p>Are participants required to be healthy?</p>
          <input
            placeholder='yes or no'
            name='healthy'
            value={this.state.health}
            onChange={this.handleChanges}
            className='search-input'
          />
          <p>Sort by likelihood of trial reaching completion</p>
          <input
            placeholder='Enter 0-100'
            name='predProb'
            value={this.state.predProb}
            onChange={this.handleChanges}
            className='search-input'
          />
          <p>Maximum participant age</p>
          <input
            placeholder='Maximum age allowed'
            name='maxAge'
            value={this.state.maxAge}
            onChange={this.handleChanges}
            className='search-input'
          />
          <p>Minimum participant age</p>
          <input
            placeholder='Minimum age required'
            name='minAge'
            value={this.state.minAge}
            onChange={this.handleChanges}
            className='search-input'
          />
        </form> */}
        <h2>Search for a specific clinical trial or keywords:</h2>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder='Enter your search...'
            name='filter'
            value={this.state.filter}
            onChange={this.handleChanges}
            className='search-input'
          />
        </form>
      </div>
    );
  }
}

export default withRouter(TrialSearch);
