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
        <Route path="/data-structures/:dataType" element={<DataStructure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
