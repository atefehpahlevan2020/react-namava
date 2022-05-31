import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style.scss';
import Provider from './utils/Provider';
import 'flickity/dist/flickity.min.css';

function App() {
  return (
      <Provider>
        <Routes>
          <Route path='/' element={<Home/>} exact={true}/>
      </Routes>
      </Provider>
  );
}

export default App;