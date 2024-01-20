// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the about page.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>You can contact us at contact@example.com.</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
