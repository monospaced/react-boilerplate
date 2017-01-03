import React, {Component} from 'react';
import 'normalize.css';
import './App.css';
import '../Main/Main.css';
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
        />
        {React.cloneElement(this.props.children, {data: data})}
      </div>
    );
  }
}

module.exports = App;
