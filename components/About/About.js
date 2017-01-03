import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import Section from '../Section/Section';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    return (
      <main className="Main">
        <DocumentMeta title={`${data.about} | ${data.title}`}/>
        <Section>{data.about}</Section>
      </main>
    );
  }
}

module.exports = About;
