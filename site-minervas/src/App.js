import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home'
import Actions from '../src/pages/Actions/Actions'
import Sobre from '../src/pages/Sobre/Sobre'
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <HashRouter basename='/'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acoes" element={<Actions />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
