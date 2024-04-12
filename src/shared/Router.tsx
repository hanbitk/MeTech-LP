import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_URL } from "../utils/constants";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Releases from "../pages/Releases";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path={PATH_URL.ABOUT} element={<About />} />
          <Route path={PATH_URL.SERVICE} element={<Service />} />
          <Route path={PATH_URL.RELEASE} element={<Releases />} />
          <Route path={PATH_URL.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
