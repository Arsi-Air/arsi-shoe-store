import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

// import { Shoes } from './components/Shoes/Shoes';
import { Home } from './components/Home/Home';
import { LaunchIndex, LaunchShoe } from './components/LaunchIndex/LaunchIndex';
import { NotFound } from './components/NotFound/NotFound';



// import { Test1 } from './TestStuff/Test1';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Products</Link>
      </nav>

      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Launch() {
  return (
    <div>
      <h1 className="productsMain">Our Products</h1>

      <Outlet />
    </div>
  )
}

export default App;
/* <img className="img1" src={shoes["nike-air-zoom-pegasus"].img} alt="Nike Air Zoom Pegasus" /> */