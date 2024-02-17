import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/rootReducer/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate persistor={persistor} loading={null}> */}
      <BrowserRouter basename="/repairing_the_interior">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
