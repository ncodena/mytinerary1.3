import { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
//import CityState from './context/city/CityState';

const App =( ) => {
  return (
    <BrowserRouter>
      <Fragment>
        
          <AppNavbar />
          <div className="container">
            
            <Routes>
          
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About />}/>
            </Routes>
            
          </div>
          
        
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
