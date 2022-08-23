import React,{useState,useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from './routes/PublicRoutes';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"
import AdminRoutes from "./routes/AdminRoutes";
const App = () => {

  return <div>
    <Router>
      <ToastContainer/>
      <PublicRoutes/>
     { JSON.parse(localStorage.getItem("user")).role=="ADMIN"&& <AdminRoutes/>}
    </Router>
  </div>;
};

export default App;