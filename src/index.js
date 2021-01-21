import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux'
// import rootReducer from './reducers'
import App from './App';
// import { Provider } from 'react-redux'

// const store = createStore(rootReducer)

ReactDOM.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);
