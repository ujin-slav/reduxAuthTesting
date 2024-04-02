import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/reducer';
import { createStore,applyMiddleware } from 'redux';
import store from './store/slices';

//const store = createStore(reducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
  document.getElementById('root')
);
