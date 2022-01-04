// import React from 'react'
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Student from './Student';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
