import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import globalStyle from './styles/global.modules.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App style={globalStyle} />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
