import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import Services from "./components/Services";



function MainRouter() {
  return (
    <div>
      <Header />
      <News />
      <Services />
    </div>
  );
}

export default MainRouter;
