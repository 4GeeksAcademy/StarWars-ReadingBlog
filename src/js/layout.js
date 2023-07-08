import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Main } from "./views/main";

import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { Vehicle } from "./views/vehicle";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/character/:name" element={<Character />} />
          <Route path="/planet/:name" element={<Planet />} />
          <Route path="/vehicle/:name" element={<Vehicle />} />

          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
