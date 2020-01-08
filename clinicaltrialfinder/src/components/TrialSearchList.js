import React, { Component } from 'react';
import TrialsList from '../views/TrialsList';
import TrialSearch from './TrialSearch';
import { connect } from 'react-redux';
import { searchTrial } from '../actions';
import Trials from './Trials';
import { Link } from 'react-router-dom';

class TrialSearchList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.searchTrial(this.props.match.params.query);
  }

  render() {
    return this.props.conditions.length === 0 ? (
      <div className='trial-search-list'>
        ><Link to='/protected'>No Results Found. Click here to try again.</Link>
      </div>
    ) : (
      <div className='trial-search-list'>
        ><Link to='/protected'>Make Another Search</Link>
        <Trials trials={this.props.conditions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions,
});

export default connect(mapStateToProps, { searchTrial })(TrialSearchList);
