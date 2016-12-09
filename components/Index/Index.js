import React, { Component, } from 'react';
import DocumentMeta from 'react-document-meta';
import Main from '../Main/Main';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <DocumentMeta title={this.props.data.title} />
        <Main>{this.props.data.title}</Main>
      </div>
    );
  }
}

module.exports = Index;