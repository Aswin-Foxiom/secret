import React from "react";

function CreateStory() {
  return (
    <div>
      {/* <div class="section page-title">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="text-center-sm">
                <h1 class="title">Contact Us</h1>
                <div class="breadcrumbs">
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
      <div class="section pt-4 mb-10">
        <div class="container">
          <div class="row">
            <div className="col-md-3">
              <div className="sidebar">
                <div className="widget-area">
                  <div className="widget widget-film-posts">
                    <h3 className="widget-title">Your Posts</h3>
                    <div className="item">
                      <div className="thumb">
                        <img src="/images/blog/thumb/blog_9.jpg" alt />
                      </div>
                      <div className="info">
                        <span className="date"> January 25, 2017 </span>
                        <span className="title">
                          <a href="blog-detail.html">
                            {" "}
                            The Story of Ferguson through...{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/images/blog/thumb/blog_10.jpg" alt />
                      </div>
                      <div className="info">
                        <span className="date"> January 25, 2017 </span>
                        <span className="title">
                          <a href="blog-detail.html">
                            {" "}
                            “Communication Is Where a Film...{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="/images/blog/thumb/blog_11.jpg" alt />
                      </div>
                      <div className="info">
                        <span className="date"> January 25, 2017 </span>
                        <span className="title">
                          <a href="blog-detail.html">
                            {" "}
                            Profound Communication Only Happens When...{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <h3 class="section-title bottom-line mb-5">Create Your Story</h3>
              <form method="post" class="contact-form">
                <div class="row">
                  <div class="col-md-4">
                    <input
                      type="text"
                      name="your-name"
                      value=""
                      size="40"
                      class="mb-3"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <textarea
                      name="your-message"
                      cols="40"
                      rows="7"
                      class="mb-3"
                      placeholder="Story"
                    ></textarea>
                  </div>
                </div>
                <div class="row" style={{ float: "right" }}>
                  <div class="col-md-12">
                    <input type="submit" value="Save" class="button" />
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

export default CreateStory;
