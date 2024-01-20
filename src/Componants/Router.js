// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import './App.css';
// import Test from './Test';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     <p>Welcome to the home page!</p>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//     <p>This is the about page.</p>
//     <NavLink to="/about/test">myname</NavLink>
//   </div>
// );

// const Contact = () => (
//   <div>
//     <h2>Contact</h2>
//     <p>You can contact us at contact@example.com.</p>
//   </div>
// );

// const NotFound = () => (
//   <div>
//     <h2>404 Not Found</h2>
//     <p>Sorry, the page you are looking for does not exist.</p>
//   </div>
// );

// const App = () => (
//   <Router>
//     <div>
//       <div className="style">
//             <NavLink to="/">Home page</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
          
//       </div>

//       <hr />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/about/test" element={<Test />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Catch-all route for non-existent pages */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;
