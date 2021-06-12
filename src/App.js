import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataTree } from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Pizza Favorita 🇬🇧' data={productData}/>
      <Feature />
      <Products heading='Pizza Favorita 🇧🇷' data={productDataTwo}/>
      <Products heading='Escolha sua Sobremessa' data={productDataTree}/>
    </Router>
  );
}

export default App;
