import React from "react";

function Header() {
  return (
    <div>
      <header id="header" className="header header-desktop header-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <div className="header-left">
                <a href="./" id="branding_logo">
                  {/* <img
                    className="logo"
                    src="/images/logo_alt.png"
                    alt="Logo"
                    title="Nine Studio"
                  />
                  <img
                    className="logo-alt"
                    src="/images/logo_alt.png"
                    alt="Logo"
                    title="Nine Studio"
                  /> */}
                </a>
              </div>
            </div>
            <div className="col-md-9 p-0">
              <div className="header-right">
                <nav id="menu" className="menu menu-primary">
                  <ul>
                    <li className="">
                      <a href="/">Home</a>
                    </li>
                    <li className="">
                      <a href="/about-us">About Us</a>
                    </li>
                    <li className="">
                      <a href="/story">Story</a>
                    </li>
                    <li className="">
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li className="">
                      <a href="/login">Signin / Register</a>
                    </li>
                  </ul>
                </nav>
                {/* <div id="open-search" className="open-search top-search-btn">
                  <i className="ion-ios-search-strong" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header header-mobile">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <div className="header-left">
                <div id="open-left">
                  <i className="ion-navicon" />
                </div>
              </div>
            </div>
            <div className="col-xs-8">
              <div className="header-center">
                <a href="./" id="logo-2">
                  <img
                    className="logo-image"
                    src="/images/logo_alt.png"
                    alt="Nine Studio Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="header-right">
                <div id="open-search-2" className="open-search top-search-btn">
                  <i className="ion-ios-search-strong" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
