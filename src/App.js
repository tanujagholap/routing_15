import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './compo/layout/Navbar'
import Add from './compo/pages/Add';
import Show from './compo/pages/Show';
import Update from './compo/pages/Update';
import Delete from './compo/pages/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/delete/:id' element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

