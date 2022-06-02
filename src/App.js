import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style.scss';
import Provider from './utils/Provider';
import 'flickity/dist/flickity.min.css';
import Single from './pages/Single';


function App() {
  return (
      <Provider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={'/:type/:id([0-9]+):name'} element={<Single/>}/>
      </Routes>
      </Provider>
  );
}

export default App;