import "./style.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { 
//   faPlus, faTrash, faMagnifyingGlass, faXmark,
//   faArrowsUpDownLeftRight, faPen, faCaretDown,
//   faFloppyDisk, faBroom
// } from '@fortawesome/free-solid-svg-icons'

// import Painel from './pages/Painel';
// import Gallery from './pages/Gallery';
// import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import ToDo from "./pages/ToDo";
import Notepad from "./pages/Notepad";

// library.add(fab,
//   faPlus, faTrash, faMagnifyingGlass, faXmark,
//   faArrowsUpDownLeftRight, faPen, faCaretDown,
//   faFloppyDisk, faBroom
// )

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