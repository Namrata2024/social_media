import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import { Navbar } from './components/navbar';
import Createpost from './pages/create-post/Createpost';
import { Login } from './pages/login';
import {Main} from './pages/main/main'
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/createpost' element={<Createpost/>}></Route>
        </Routes>
      </Router>
      </div>
   
  );
}

export default App;
