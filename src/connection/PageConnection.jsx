import React from "react";
import Responsive from "../layouts/Responsive";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

function PageConnection() {
  return (
    <div>
      <Responsive />
      <div className="site">
        <Header />
        <div id="main">
          <Outlet />
        </div>
        <Footer />
      </div>

      <div className="md-overlay" />
      {/* the overlay element */}
      <a className="backtotop" id="backtotop">
        <i className="ion-android-arrow-up" />
      </a>
    </div>
  );
}

export default PageConnection;
