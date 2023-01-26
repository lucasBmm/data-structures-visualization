import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataStructure } from './pages/data-scructure/Data-structure';
import { Home } from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="data-structures" >
          <Route path='linked-list' element={<DataStructure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
