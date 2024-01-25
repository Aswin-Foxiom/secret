import React from "react";

function ContactUs() {
  return (
    <div>
      {/* <div className="section page-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center-sm">
                <h1 className="title">Contact Us</h1>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section pt-4 mb-10">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon-boxes">
                  <div className="icon-boxes-inner">
                    <h5 className="icon-boxes-title"> Address</h5>
                    <div className="icon-boxes-content">
                      1800 Abbot Kinney Blvd. Unit D &amp; E<br /> Venice, CA
                      90291
                    </div>
                  </div>
                </div>
                <div className="icon-boxes">
                  <div className="icon-boxes-inner">
                    <h5 className="icon-boxes-title"> Phone</h5>
                    <div className="icon-boxes-content">
                      Mobile: (+88) – 1990 – 6886
                      <br /> Hotline: 1800 – 1102
                    </div>
                  </div>
                </div>
                <div className="icon-boxes">
                  <div className="icon-boxes-inner">
                    <h5 className="icon-boxes-title"> Email</h5>
                    <div className="icon-boxes-content">
                      support@9studio.com
                      <br /> contact@9studio.com
                    </div>
                  </div>
                </div>
                <ul className="film-social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-vine" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-youtube-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <h3 className="section-title bottom-line mb-5">Get In Touch</h3>
              <form method="post" className="contact-form">
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="your-name"
                      defaultValue
                      size={40}
                      className="mb-3"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="your-subject"
                      defaultValue
                      size={40}
                      className="mb-3"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      name="your-email"
                      defaultValue
                      size={40}
                      className="mb-3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      name="your-message"
                      cols={40}
                      rows={7}
                      className="mb-3"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="SEND US NOW"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
