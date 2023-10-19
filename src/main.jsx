import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import globalStyle from './styles/global.modules.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App style={globalStyle} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
