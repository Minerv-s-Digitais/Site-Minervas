import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home'
import Actions from '../src/pages/Actions/Actions'
import Sobre from '../src/pages/Sobre/Sobre'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acoes" element={<Actions />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
