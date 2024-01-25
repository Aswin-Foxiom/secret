import React from "react";

export default function Responsive() {
  return (
    <div>
      <div id="menu-slideout" className="slideout-menu hidden-md-up">
        <div className="mobile-menu">
          <ul id="mobile-menu" className="menu">
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

          {/* <ul id="mobile-menu" className="menu">
            <li className="dropdown">
              <a href="#">Home</a>
              <i className="sub-menu-toggle fa fa-angle-down" />
              <ul className="sub-menu">
                <li>
                  <a href="./">Home Production</a>
                </li>
                <li>
                  <a href="index-film-making.html">Home Film Making</a>
                </li>
                <li>
                  <a href="index-studio.html">Home Studio</a>
                </li>
                <li>
                  <a href="index-director.html">Home Director</a>
                </li>
                <li>
                  <a href="index-agency.html">Home Agency</a>
                </li>
                <li className="active">
                  <a href="index-blogger.html">Home Blogger</a>
                </li>
                <li>
                  <a href="index-showcase.html">Home Showcase</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Pages</a>
              <i className="sub-menu-toggle fa fa-angle-down" />
              <ul className="sub-menu">
                <li className="dropdown">
                  <a href="#">About</a>
                  <i className="sub-menu-toggle fa fa-angle-down" />
                  <ul className="sub-menu">
                    <li>
                      <a href="about-1.html">About 01</a>
                    </li>
                    <li>
                      <a href="about-2.html">About 02</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Our Team</a>
                  <i className="sub-menu-toggle fa fa-angle-down" />
                  <ul className="sub-menu">
                    <li>
                      <a href="our-team-1.html">Our Team 01</a>
                    </li>
                    <li>
                      <a href="our-team-2.html">Our Team 02</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Our Services</a>
                  <i className="sub-menu-toggle fa fa-angle-down" />
                  <ul className="sub-menu">
                    <li>
                      <a href="our-services-1.html">Our Services 01</a>
                    </li>
                    <li>
                      <a href="our-services-2.html">Our Services 02</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Gallery</a>
                  <i className="sub-menu-toggle fa fa-angle-down" />
                  <ul className="sub-menu">
                    <li>
                      <a href="gallery-1.html">Gallery 01</a>
                    </li>
                    <li>
                      <a href="gallery-2.html">Gallery 02</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Productions</a>
              <i className="sub-menu-toggle fa fa-angle-down" />
              <ul className="sub-menu">
                <li>
                  <a href="our-projects-list.html">Productions List</a>
                </li>
                <li>
                  <a href="our-projects-grid.html">Productions Grid</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Blog</a>
              <i className="sub-menu-toggle fa fa-angle-down" />
              <ul className="sub-menu">
                <li>
                  <a href="blog-list-1.html">Blog List 01</a>
                </li>
                <li>
                  <a href="blog-list-2.html">Blog List 02</a>
                </li>
                <li>
                  <a href="blog-list-3.html">Blog List 03</a>
                </li>
                <li>
                  <a href="blog-masonry.html">Blog Masonry</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="top-search">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <input
                  type="search"
                  className="top-search-input"
                  name="s"
                  placeholder="What are you looking for?"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
