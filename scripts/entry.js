import React from 'react';
import ReactDOMServer from'react-dom/server';
import Root from '../components/Root/Root.js';

module.exports = function render(locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};
