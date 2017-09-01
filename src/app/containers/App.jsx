import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetGemsAsync from '../actions/doGetGemsAsync';
import {toggleFavorite} from '../actions/toggleFavoriteAction';
import App from '../components/App';

const mapDispatchToProps = dispatch => ({
  doGetGemsAsync(...args) {
    dispatch(doGetGemsAsync(...args));
  },
  toggleFavorite(...args) {
    dispatch(toggleFavorite(...args));
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
