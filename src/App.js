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
        <div className='container-fluid'>
            <div className='row p-0'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path={'/:type/:id/*'} element={<Single/>}/>
            </Routes>
            </div>
        </div>
      </Provider>
  );
}

export default App;