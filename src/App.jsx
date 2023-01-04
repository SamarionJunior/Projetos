import "./style.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

// import Painel from './pages/Painel';
// import Gallery from './pages/Gallery';
// import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import ToDo from "./pages/ToDo";
import Notepad from "./pages/Notepad";

const App = _ => (
  <div className="App">
    <Routes>
      {/* <Route path="painel" element={<Painel />} /> */}
      <Route path="agenda" element={<Schedule />} />
      <Route path="/" element={<ToDo />} />
      <Route path="notepad" element={<Notepad />} />
    </Routes>
  </div>
)

export default App