import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return <Outlet />;
};

export default App;
