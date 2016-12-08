import React, { Component, } from 'react';
import '../../assets/favicon.ico';
import 'normalize.css';
import './Root.css';
import Main from '../Main/Main';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" type="text/css" href="/styles.css"/>
        </head>
        <body>
          <Main>Mnspcd React Boilerplate</Main>
        </body>
      </html>
    );
  }
}

module.exports = Root;
