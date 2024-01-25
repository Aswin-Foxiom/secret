import React, { useState } from "react";

function Authentication() {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div>
      <div className="section pt-4 mb-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4"></div>
            {isLogin ? (
              <div className="col-12 col-md-4">
                <h3 className="section-title bottom-line mb-5">Login</h3>
                <form method="post" className="contact-form">
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="your-name"
                        size={40}
                        className="mb-3"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="your-Password"
                        size={40}
                        className="mb-3"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="row" style={{ float: "right" }}>
                    <div className="col-md-12">
                      <input
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/profile";
                        }}
                        type="submit"
                        defaultValue="SEND US NOW"
                        className="button"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <p onClick={() => setisLogin(!isLogin)}>
                      {isLogin ? "Register Your Account" : "Back to Login"}
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="col-12 col-md-4">
                <h3 className="section-title bottom-line mb-5">Register</h3>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="your-name"
                        size={40}
                        className="mb-3"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="your-Password"
                        size={40}
                        className="mb-3"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="row" style={{ float: "right" }}>
                    <div className="col-md-12">
                      <input
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/profile";
                        }}
                        type="submit"
                        defaultValue="SEND US NOW"
                        className="button"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <p onClick={() => setisLogin(!isLogin)}>
                      {isLogin ? "Register Your Account" : "Back to Login"}
                    </p>
                  </div>
                </form>
              </div>
            )}
            <div className="col-12 col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
