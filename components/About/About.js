import React, { Component, } from 'react';
import DocumentMeta from 'react-document-meta';
import Main from '../Main/Main';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DocumentMeta title={`About | ${this.props.data.title}`} />
        <Main>About</Main>
      </div>
    );
  }
}

module.exports = About;