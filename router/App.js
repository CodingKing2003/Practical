// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about"element={<About />} />
      </Routes>
       
      </div>
    </Router>
  );
}

export default App;
