import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import App from '../components/App/App.js';
import Index from '../components/Index/Index.js';
import About from '../components/About/About.js';
import data from './data.js';

const Routes = (
  <Route path="/" component={App} data={data} >
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
  </Route>
);

module.exports = Routes;
