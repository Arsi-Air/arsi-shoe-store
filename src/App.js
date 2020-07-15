import React from 'react';
import imgLogo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import { Shoes } from './components/Shoes/Shoes';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';



// import { Test1 } from './TestStuff/Test1';

function App() {
  return (
    <Router>
      <nav>
      <img className="imgLogo" src={imgLogo} alt="Arsi logo" />
        <Link to="/" className="navHome" >Home</Link>
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
      {/* <h1 className="productsMain">Our Collection</h1> */}

      <Outlet />
    </div>
  )
}

const LaunchIndex = () => {
  return (
    <div className="wrapperLI">
    <p className="runningTitle">Running Shoes</p>
    <ul>
      {Object.entries(Shoes).map(([slug, { name, img, price, stock }]) => (
        <li className="launchShoes" key={slug}>
          <Link to={`/launch/${slug}`}>
            <img className="launchPics" src={img} alt={name} />
            <h3 className="launchHeader">{name}</h3>
            <div className="underImage">
            <p className="stock">{stock} left in stock</p>
            <p className="price">USD {price}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};


const LaunchShoe = () => {
  const { slug } = useParams();
  const shoe = Shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>
    
  }

  const { name, img, img2, desc } = shoe;

  return (
    <div>
      <h2 className="prodHeader">{name}</h2>
      {/* <table className="prodDescTable" >
      <tr> */}
      {/* <td> */}
      <div className="prodDivMain">
      <div className="prodDiv">
      <img className="prodPageImg" src={img} alt={name} />
      {/* </td> */}
      {/* <td> */}
      <img className="prodPageImg" src={img2} alt={name} />
      </div>
      <div className="prodPageText">{ desc }</div>
      </div>
      {/* </td> */}
      {/* </tr>
      </table> */}
      </div>
  );
}


export default App;
/* <img className="img1" src={shoes["nike-air-zoom-pegasus"].img} alt="Nike Air Zoom Pegasus" /> */