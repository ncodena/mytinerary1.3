import { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/pages/About";
import CityState from './context/city/CityState';
import AuthState from './context/auth/AuthState';

const App =( ) => {
  return (
    <AuthState>
      <CityState>
      <BrowserRouter>
        <Fragment>
          
            <AppNavbar />

            
            <div className="container d-flex justify-content-center ">
              
              <Routes>
            
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
              </Routes>
              
            </div>
            
          
        </Fragment>
      </BrowserRouter>
      </CityState>
    </AuthState>
  );
}

export default App;
