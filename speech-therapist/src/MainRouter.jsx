import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import Services from "./components/Services";
import ForParents from "./components/ForParents";
import Reviews from "./components/Reviews";
import Price from "./components/Price";
import SubForm from "./components/SubForm";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";




function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <News />
            <Services />
            <Price />
            <ForParents />
            <Reviews />
            <Contacts />
            <Footer />
          </>
        } />
        <Route path="/form" element={<SubForm />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
