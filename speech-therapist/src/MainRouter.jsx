import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import Services from "./components/Services";
import ForParents from "./components/ForParents";
import Reviews from "./components/Reviews";
import Price from "./components/Price";



function MainRouter() {
  return (
    <div>
      <Header />
      <News />
      <Services />
      <Price />
      <ForParents />
      <Reviews />
    </div>
  );
}

export default MainRouter;
