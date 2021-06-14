import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { 
  productDataBr, 
  productDataPt, 
  productDataUK, 
  productDataEua,  
  productDataAle, 
  productDataUea,
  productDataTree 
} from './components/Products/data';
import Feature from './components/Feature';
import { i18n } from './translate/i18n';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Pizza Favorita 🇧🇷' data={productDataBr}/>
      {/*<Products heading={i18n.t('messages.smallText 🇧🇷')} data={productDataBr}/>*/}
      <Products heading='Pizza Favorita 🇵🇹' data={productDataPt}/>
      {/*<Products heading={i18n.t('messages.smallText 🇵🇹')} data={productDataPt}/>*/}
      <Products heading='Pizza Favorita 🇬🇧' data={productDataUK}/>
      {/*<Products heading={i18n.t('messages.smallText 🇬🇧')} data={productDataUK}/>*/}
      <Products heading='Pizza Favorita 🇺🇸' data={productDataEua}/>
      {/*<Products heading={i18n.t('messages.smallText 🇺🇸')} data={productDataEua}/>*/}
      <Products heading='Pizza Favorita 🇩🇪' data={productDataAle}/>
      {/*<Products heading={i18n.t('messages.smallText 🇩🇪')} data={productDataAle}/>*/}
      <Products heading='Pizza Favorita 🇪🇺' data={productDataUea}/>
      {/*<Products heading={i18n.t('messages.smallText 🇪🇺')} data={productDataUea}/>*/}
      <Feature />
      <Products heading='Escolha sua Sobremessa' data={productDataTree}/>
    </Router>
  );
}

export default App;