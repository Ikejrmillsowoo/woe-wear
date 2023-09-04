import React from "react";
import Directories from "../../directories/directories.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Directories />
      <Outlet />
    </div>
  );
};

export default Home;
