import React, { Component, } from 'react';
import '../../assets/favicon.ico';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html lang="en-gb">
        <head>
          {this.props.meta}
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={this.props.app} />
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Root;
