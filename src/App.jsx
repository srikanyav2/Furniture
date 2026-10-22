import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Srifurniture/Navbar";
import Footer from "./Components/Srifurniture/Footer";
import Routing from "./Components/Srifurniture/Routing";
import UserData from "./Components/Hooks/UserData";
import UsersData from "./Components/Hooks/UsersData";
import ApiProduct from "./Components/PostApi/ApiProduct";
import Products from "./Components/Task/Products";
import Delete from "./Components/Hooks/Delete";
import Adminlogin from "./Components/Srifurniture/Admin/Adminlogin";
import ProductDetails from "./Components/Srifurniture/ProductDetails";
import Dashboard from "./Components/Srifurniture/Admin/Dashboard";
 import Optimazation from "./Components/Optimazation/Optimazation";
import { useState,createContext } from "react";
import HookRef from "./Components/Hooks/HookRef";



 export const loginData=createContext();

 

function App() {

 const[login,setlogin]=useState(loginData)


  
  return (
    <>
        <loginData.Provider value={[login,setlogin]}>
       <Navbar/>
      <Routing />
      <Footer />
      </loginData.Provider> 
      <HookRef/>
    </>
  );
}

export default App;