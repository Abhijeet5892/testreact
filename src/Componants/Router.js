// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
//   </div>
// );

// const Contact = () => (
//   <div>
//     <h2>Contact</h2>
//     <p>You can contact us at contact@example.com.</p>
//   </div>
// );

// const App = () => (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       <Routes> {/* Use Routes component to wrap Route components */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;
