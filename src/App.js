import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import MixedAlgoritm from './pages/mixedAlgoritm';
import SortingAlgoritm from './pages/sortingAlgoritms';
import SearchingAlgoritm from './pages/searchAlgoritms';


function App() {  
  return (  
    <div className="App">
      <Router>
        <nav>
          <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Search Algorithm
            </NavLink>
          </li>
          <li>
            <NavLink to="/mixed" className={({ isActive }) => isActive ? "active" : ""}>
              Mixed Algorithm
            </NavLink>
          </li>

          <li>
            <NavLink to="/sort" className={({ isActive }) => isActive ? "active" : ""}>
              Sort algoritms
            </NavLink>
          </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SearchingAlgoritm />} />
          <Route path="/mixed" element={<MixedAlgoritm />} />
          <Route path="/sort" element={<SortingAlgoritm />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>

      {/* <List/> */}

      {/* <ThreeExample/> */}

      {/* zoom image like amazon */}
      {/* <ZoomedImage/> */}

      {/* recognize image content */}
      {/* <ImageUpload/> */}
    </div>
  )
}
export default App;

/**JSON (JavaScript Object Notation) does not have explicit data types in the way that some programming languages do. 
* Instead, JSON represents data as a collection of key-value pairs, and the values can have various types. The basic data types in JSON include:
Strings: Represented as text enclosed in double quotes. For example: "Hello, World!"
Numbers: Can be integers or floating-point numbers. For example: 42 or 3.14
Booleans: Represented as true or false.
Null: Represents an empty value and is simply written as null.
Arrays: Ordered lists of values enclosed in square brackets. Arrays can contain values of different types, 
including other arrays. For example: [1, 2, "apple", true, null]
Objects: Unordered collections of key-value pairs, where keys are strings and values can be of any JSON data type. 
Objects are enclosed in curly braces. For example: */


