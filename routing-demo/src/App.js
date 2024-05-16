import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul className='App-header'>
            <li>
              <Link to = "/home">Home</Link>
            </li>
            <li>
              <Link to = "/about">About US</Link>
            </li>
            <li>
              <Link to = "/contact">Contact US</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    )
  } 
}


export default App;
