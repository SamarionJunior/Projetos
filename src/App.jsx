import "./style.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

// import Painel from './pages/Painel';
// import Gallery from './pages/Gallery';
// import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import ToDo from "./pages/ToDo";

const App = _ => (
  <div className="App">
    <Routes>
      {/* <Route path="painel" element={<Painel />} /> */}
      <Route path="/" element={<Schedule />} />
      <Route path="todo" element={<ToDo />} />
    </Routes>
  </div>
)

export default App