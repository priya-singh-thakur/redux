import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import storeConfig from './redux/store/store'
// import UserList from './redux/reducers/UserList';

let store = storeConfig

// console.log("jj", store)
ReactDOM.render(
  <Provider store={store}>
    <Router>
       <Router />
    </Router>,
   </Provider>,
  document.getElementById('root')
);
