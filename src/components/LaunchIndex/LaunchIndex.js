// import React from "react";
// import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
// //fix Router
// import { Shoes } from "../Shoes/Shoes";

// export const LaunchIndex = () => {
//   return (
//     <div className="wrapperLI">
//     <p className="categories">hi</p>
//     <ul>
//       {Object.entries(Shoes).map(([slug, { name, img }]) => (
//         <li className="launchShoes" key={slug}>
//           <Link to={`/launch/${slug}`}>
//             <img className="launchPics" src={img} alt={name} />
//             <h3 className="launchHeader">{name}</h3>
//           </Link>
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// };

// export const LaunchShoe = () => {
//   const { slug } = useParams();
//   const shoe = Shoes[slug];

//   if (!shoe) {
//     return <h2>Not Found!</h2>
    
//   }

//   const { name, img } = shoe;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={img} alt={name} />
//       </div>
//   );
// }
