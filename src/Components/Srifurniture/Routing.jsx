import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Catagires from "./Catagires";
import Adminlogin from "./Admin/Adminlogin";
import Dashboard from "./Admin/Dashboard";
import ProductDetails from "./ProductDetails";
import Welcome from "./Admin/Welcome";
import ViewOrders from "./Admin/ViewOrders";
import ViewProducts from "./Admin/ViewProducts";
import ViewEnquiries from "./Admin/ViewEnquiries";
import ViewReviews from "./Admin/ViewReviews";
import AddProduct from "./Admin/AddProduct";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Catagires" element={<Catagires />} />
      <Route path="/login" element={<Adminlogin />} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="" element={<Welcome />} />
        <Route path="addproduct" element={<AddProduct/>}/>
        <Route path="vieworders" element={<ViewOrders />} />
        <Route path="viewproducts" element={<ViewProducts />} />
        <Route path="viewenquiries" element={<ViewEnquiries />} />
        <Route path="viewreviews" element={<ViewReviews />} />
      </Route>
    </Routes>
  );
}

export default Routing;