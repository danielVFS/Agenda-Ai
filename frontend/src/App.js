import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/Reactotron';

import GlobalStyles from './styles/global';
import Routes from './routes';
import store from './store';
// import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
