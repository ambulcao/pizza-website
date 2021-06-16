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
} from "./components/Products/data";
import Feature from "./components/Feature";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import "./global.css";

function App() {
  const { t, i18n } = useTranslation();
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
      {/*<main>
      <p>Pizza</p>
      <section id="pizzabrasil">Pizza Favorita 🇧🇷</section>
      <section id="pizzabrasil">🇵🇹</section>
      <section id="pizzabrasil">🇬🇧</section>
      <section id="pizzabrasil">🇺🇸</section>
      <section id="pizzabrasil">🇩🇪</section>
      <section id="pizzabrasil">🇪🇺</section>
    </main>*/}
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Pizza Favorita 🇧🇷" data={productDataBr}>
          <nav>
            <ul>
              <p>Pizza Favorita</p>
              <li>
                <a href="#pizzabr"></a>🇧🇷
              </li>
            </ul>
          </nav>
          <main>
            <section id="pizzabr" />
          </main>
        </Products>
        <Products heading="Pizza Favorita 🇵🇹" data={productDataPt} />
        <Products heading="Pizza Favorita 🇬🇧" data={productDataUK} />
        <Products heading="Pizza Favorita 🇺🇸" data={productDataEua} />
        <Products heading="Pizza Favorita 🇩🇪" data={productDataAle} />
        <Products heading="Pizza Favorita 🇪🇺" data={productDataUea} />
        <Feature />
        <Products heading="Escolha sua Sobremessa" data={productDataTree} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
