import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Provider from './utils/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <Router>
        <App/>
      </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
