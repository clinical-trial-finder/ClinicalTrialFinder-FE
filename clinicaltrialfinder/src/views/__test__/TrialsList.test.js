import React from 'react';
import ReactDOM from 'react-dom';
import TrialsList from './../TrialsList';
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrialsList></TrialsList>, div);
});
