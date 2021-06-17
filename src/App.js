import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {
  productDataBr,
  productDataPt,
  productDataUK,
  productDataEua,
  productDataAle,
  productDataUea,
  productDataTree,
  productDataCal,
  productDataEsf,
  productDataEsfDoces
} from "./components/Products/data";
import Feature from "./components/Feature";
import "./global.css";
import FeatureBr from "./components/Featurebr";
import FeatureEs from "./components/FeatureEs";
import FeatureEsDc from "./components/FeatureEsDc";
import Footer from "./components/Footer";

function App() {
 
  return (
    <>
      <nav>
        <ul>
          <p>Pizza Favorita</p>
          <li>
            <a href="#pizzabr">🇧🇷</a>
          </li>
          <li>
            <a href="#pizzapt">🇵🇹</a>
          </li>
          <li>
            <a href="#pizzauk">🇬🇧</a>
          </li>
          <li>
            <a href="#pizzaeua">🇺🇸</a>
          </li>
          <li>
            <a href="#pizzaale">🇩🇪</a>
          </li>
          <li>
            <a href="#pizzaue">🇪🇺</a>
          </li>
          <li>
            <a href="#sobremesa">Sobremesa</a>
          </li>
          <li>
            <a href="#calzone">Calzone</a>
          </li>
          <li>
            <a href="#esfiha">Esfiha</a>
          </li>
          <li>
            <a href="#pfdoces">Pizzas e Esfihas Doces</a>
          </li>
        </ul>
      </nav>
      <Router>
        <GlobalStyle />
        <Hero />
          <main>
            <section id="pizzabr" ><Products heading="Pizza Favorita 🇧🇷" data={productDataBr}/></section>
          </main>
          <main>
            <section id="pizzapt" ><Products heading="Pizza Favorita 🇵🇹" data={productDataPt}/></section>
          </main>
          <main>
            <section id="pizzauk" ><Products heading="Pizza Favorita 🇬🇧" data={productDataUK} /></section>
          </main>
          <main>
            <section id="pizzaeua" ><Products heading="Pizza Favorita 🇺🇸" data={productDataEua} /></section>
          </main>
          <main>
            <section id="pizzaale" ><Products heading="Pizza Favorita 🇩🇪" data={productDataAle} /></section>
          </main>
          <main>
            <section id="pizzaue" ><Products heading="Pizza Favorita 🇪🇺" data={productDataUea} /></section>
          </main>
        <Feature />
          <main>
            <section id="sobremesa" ><Products heading="Escolha sua Sobremesa" data={productDataTree} /></section>
          </main>
        <FeatureBr />
          <main>
            <section id="calzone" ><Products heading="Calzones" data={productDataCal} /></section>
          </main>
        <FeatureEs />
          <main>
            <section id="esfiha" ><Products heading="Esfiha" data={productDataEsf} /></section>
          </main>
        <FeatureEsDc />
          <main>
            <section id="pfdoces" ><Products heading="Pizzas e Esfihas Doces" data={productDataEsfDoces} /></section>
          </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
