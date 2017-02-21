import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';

import * as actionCreators from './actions/actionCreators';

import Main from './components/Main';
import Plants from './components/Plants';
import Plant from './components/Plant';

function mapStateToProps(state) {
  return {
    plants: state.plants
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);



export default App;
