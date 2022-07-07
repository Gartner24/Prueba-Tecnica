import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBars from "../components/NavBars";
import Pokemon from "../components/Pokemon";
import Home from "../containers/Home";
const DashboardRouters = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
};

export default DashboardRouters;
