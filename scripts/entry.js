import React from 'react';
import ReactDOM from'react-dom';
import ReactDOMServer from'react-dom/server';
import {Router, browserHistory, createMemoryHistory} from 'react-router';
import DocumentMeta from 'react-document-meta';
import Root from '../components/Root/Root.js';
import routes from './routes';

if (typeof document !== 'undefined') {
  const app = document.getElementById('app');
  ReactDOM.render(<Router history={browserHistory} routes={routes}/>, app);
}

export default (locals, callback) => {
  const history = createMemoryHistory(locals.path);
  const app = {__html: ReactDOMServer.renderToString(<Router history={history} routes={routes}/>)};
  const meta = DocumentMeta.renderAsReact();
  const html = ReactDOMServer.renderToStaticMarkup(<Root meta={meta} app={app}/>);
  callback(null, '<!DOCTYPE html>' + html);
};
