import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetGemsAsync from '../actions/doGetGemsAsync';
import App from '../components/App';

const mapDispatchToProps = dispatch => ({
  doGetGemsAsync(...args) {
    dispatch(doGetGemsAsync(...args));
  }
});

const mapStateToProps = state => {
  return {
    gemsList: state.gemsList,
    gemsHasFailed: state.gemsHasFailed,
    gemsAreLoading: state.gemsAreLoading
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
