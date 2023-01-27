import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";


const App = () => {
  const theme = {
    colors: {
      bg: "#000",
    },
  }
  return (
    
    <ThemeProvider theme = {theme}>
  <Router>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path="/cart/" element ={<Cart/>}/>
      <Route path="*" element ={<ErrorPage/>}/>

    </Routes>
  </Router>
  </ThemeProvider>
  );
};

export default App;
