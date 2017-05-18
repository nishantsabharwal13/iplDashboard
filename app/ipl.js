
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Table from './components/Table';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Table}></IndexRoute>
        <Route path="/calender/:id" component={Table}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful');
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
