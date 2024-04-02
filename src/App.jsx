import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forget from './Components/Forget';
import AuthRoute from './AuthRouts/AuthRoute';
import ProtectedRoutes from './AuthRouts/Protected';


function App() {
  return (
    <>
      <ToastContainer />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path='/Forget' element={<Forget />}/>
        <Route path='/AuthRoute' element={<AuthRoute />} />
        <Route path='/Protected' element={<ProtectedRoutes />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
