import React, { Component, } from 'react';
import 'normalize.css';
import './App.css';
import Nav from '../Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav
          data={this.props.route.data}
        />
        {React.cloneElement(this.props.children, { data: this.props.route.data, })}
      </div>
    );
  }
}

module.exports = App;
