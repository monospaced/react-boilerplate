import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import Section from '../Section/Section';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    return (
      <main className="Main">
        <DocumentMeta title={data.title}/>
        <Section>{data.title}</Section>
      </main>
    );
  }
}

module.exports = Index;
