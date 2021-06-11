import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import FeatureBr from './components/Featurebr';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Escolha sua pizza favorita' data={productData}/>
      <Feature />
      <FeatureBr />
      <Products heading='Escolha sua sobremessa' data={productDataTwo}/>
    </Router>
  );
}

export default App;
