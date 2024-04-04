import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="border">
      <Header />
      <main className="h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
