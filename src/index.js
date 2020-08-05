import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes';
import * as serviceWorker from './serviceWorker';
import configureStore, {history} from './store/configureStore';
import {Spinner} from "react-bootstrap";
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <Suspense
          fallback={<Spinner/>}
      >
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <Router history={history}>
                              <App/>
                  </Router>
              </ConnectedRouter>
          </Provider>
      </Suspense>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
