import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as Router } from 'react-router';
import App from './App';
import database from 'firebase-database';

export default class extends Component {
  constructor(props) {
    super(props);

    database.initializeApp(props.appConfig);
  }

  render() {
    const { url, context, initialState } = this.props;

    return (
      <Router location={url} context={context}>
        <App state={initialState} />
      </Router>
    );
  }
}