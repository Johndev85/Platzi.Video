import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'
import reducer from './reducers';
import App from './routes/App';

/*     Render recibe dos parametros
    Ruta de salida de la aplicación, se añade ruta y hacia donde se va a mostrar
 */

const history = createBrowserHistory()
const preloadedState = window.__PRELOADED_STATE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__

ReactDom.hydrate(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
  </Provider>,

  document.getElementById('app'),
);

