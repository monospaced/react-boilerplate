import React, {Component} from 'react';
import 'normalize.css';
import './App.css';
import '../Main/Main.css'; /* <main> style component for Route components */
import Nav from '../Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props.route;
    return (
      <div>
        <Nav
          data={data}
          routes={this.props.routes}
        />
        {/* Route components defined in ./scripts/routes.js */}
        {React.cloneElement(this.props.children, {data: data})}
      </div>
    );
  }
}

module.exports = App;
