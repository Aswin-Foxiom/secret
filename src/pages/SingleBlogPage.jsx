import React from "react";

function SingleBlogPage() {
  return (
    <div>
      <div>
        {/* <div className="section page-title">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center-sm">
                  <h1 className="title">Blog Detail</h1>
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <a href="./">Home</a>
                      </li>
                      <li>
                        <a href="#">Video</a>
                      </li>
                      <li>
                        Profound Communication Only Happens When There Is
                        Persistence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section pt-4 pb-12">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="blog-detail">
                  <div className="single-post-thumbnail">
                    <img src="/images/blog/blog_detail.jpg" alt />
                    <div className="list-categories">
                      <a href="#">Featured</a>
                    </div>
                  </div>
                  <h4 className="entry-title">
                    The Story of Ferguson through the Eyes of the People Who
                    Lived it
                  </h4>
                  <div className="meta">
                    <span className="view">174 Views</span>
                    <span className="like">
                      <a href="#" className="like-btn">
                        2 Likes
                      </a>
                    </span>
                    <span className="comment">0 Comment</span>
                  </div>
                  <div className="entry-content mb-3">
                    <p>
                      By the time we wrapped our last shooting day, we had
                      collected over 300 hours of footage. Lungs shouted for
                      justice and moments later filled with teargas. A father
                      baked cookies during a moment of peace. A police chief and
                      a mayor cited lack of data. Our creative team quickly
                      realized we had several possible movies on our hands, but
                      our goal was singular; we wanted to communicate the story
                      of Ferguson through the eyes of the people who lived it.
                      As we looked for inspiration we came to understand our
                      obstacle more clearly. We were entering a landscape where
                      audiences were used to a particular type of journey. In
                      historical moments like the one we are living through, we
                      look for guidance in stories. One could argue that it is
                      therapeutic to watch a person or group pursue a goal, and
                      through some climactic moment succeed or fail, providing
                      us with a lesson learned, and a sense of resolution.
                    </p>
                  </div>
                  <div className="entry-footer">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tags">
                          <span className="tag-icon ion-ios-pricetags" />
                          <a href="#">event</a>, <a href="#">festival</a>,{" "}
                          <a href="#">film</a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="entry-share">
                          <ul className="film-social">
                            <li>
                              <a
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Facebook"
                                target="_blank"
                                href="#"
                              >
                                {" "}
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Twitter"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Google"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="entry-author">
                    <div className="row">
                      <div className="col-md-2">
                        <img alt src="/images/avatar/avatar_big.png" />
                      </div>
                      <div className="col-md-10">
                        <div className="mt-1" />
                        <h3 className="name">Jonathan Doe</h3>
                        <div className="desc">
                          Typi non habent claritatem insitam; est usus legentis
                          in iis qui facit eorum claritatem. Indemon strunt
                          lectores legere me lius quod ii legunt saepius.
                          Claritas est etiam processus dynamicus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="entry-nav">
                    <div className="row">
                      <div className="col-md-5 left">
                        <i className="fa fa-angle-double-left" />
                        <a href="#" className="prev">
                          “Communication Is Where a Film Lives and Dies”:
                          Director Zoe Lister-Jones
                        </a>
                      </div>
                      <div className="col-md-2 text-center">
                        <i className="ion-grid" />
                      </div>
                      <div className="col-md-5 right">
                        <a href="#">
                          The Story of Ferguson through the Eyes of the People
                          Who Lived it
                        </a>
                        <i className="fa fa-angle-double-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-area mt-6">
                  <h2 className="comments-title"> Comments (3)</h2>
                  <ol className="comment-list">
                    <li>
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author">
                            <img alt src="/images/avatar/avatar.png" />
                            <b className="fn">Jonathan Doe</b>
                          </div>
                          <div className="comment-metadata">
                            <a href="#">
                              <span> January 10, 2017 at 10:22 am </span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div className="reply">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </article>
                      <ol className="children">
                        <li>
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author">
                                <img alt src="/images/avatar/avatar.png" />
                                <b className="fn">John Doe</b>
                              </div>
                              <div className="comment-metadata">
                                <a href="#">
                                  <span> August 23, 2017 at 3:26 am </span>
                                </a>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                            <div className="reply">
                              <a className="comment-reply-link" href="#">
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author">
                            <img alt src="/images/avatar/avatar.png" />
                            <b className="fn">Jonathan Doe</b>
                          </div>
                          <div className="comment-metadata">
                            <a href="#">
                              <span> January 10, 2017 at 10:22 am </span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div className="reply">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </article>
                    </li>
                  </ol>
                  <div className="comment-respond">
                    <h3 className="section-title fz-24 fw-bolder bottom-line">
                      {" "}
                      Leave your thought
                    </h3>
                    <form className="comment-form mt-5" method>
                      <div className="row">
                        <div className="col-md-12">
                          <textarea
                            placeholder="Comment *"
                            name="comment"
                            className="mb-2"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            placeholder="Name *"
                            name="author"
                            type="text"
                            defaultValue
                            size={30}
                            className="mb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            placeholder="Email *"
                            name="email"
                            type="text"
                            defaultValue
                            size={30}
                            className="mb-2"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            placeholder="Website"
                            name="url"
                            type="text"
                            defaultValue
                            size={30}
                            className="mb-2"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="button"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sidebar">
                  <div className="widget-area">
                    <div className="widget widget-search">
                      <form method="get" className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search …"
                          defaultValue
                          name="s"
                        />
                        <input
                          type="submit"
                          className="search-submit"
                          defaultValue="Search"
                        />
                      </form>
                    </div>
                    <div className="widget widget-film-categories">
                      <h3 className="widget-title">Categories</h3>
                      <div className="item">
                        <a href="#">Featured</a>
                        <span>1</span>
                      </div>
                      <div className="item">
                        <a href="#">Gallery</a>
                        <span>1</span>
                      </div>
                      <div className="item">
                        <a href="#">News</a>
                        <span>3</span>
                      </div>
                      <div className="item">
                        <a href="#">Quote</a>
                        <span>2</span>
                      </div>
                      <div className="item">
                        <a href="#">Review</a>
                        <span>1</span>
                      </div>
                      <div className="item">
                        <a href="#">Tutorials</a>
                        <span>1</span>
                      </div>
                      <div className="item">
                        <a href="#">Uncategorized</a>
                        <span>1</span>
                      </div>
                      <div className="item">
                        <a href="#">Video</a>
                        <span>3</span>
                      </div>
                    </div>
                    <div className="widget widget-film-posts">
                      <h3 className="widget-title">Popular Posts</h3>
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
                    <div className="widget widget-tag-cloud">
                      <h3 className="widget-title">Popular Tags</h3>
                      <div className="tagcloud">
                        <a href="#">actress</a> <a href="#">cinematographer</a>{" "}
                        <a href="#">creative</a> <a href="#">designer</a>{" "}
                        <a href="#">director</a> <a href="#">event</a>{" "}
                        <a href="#">festival</a> <a href="#">film</a>{" "}
                        <a href="#">film maker</a> <a href="#">films</a>{" "}
                        <a href="#">international</a> <a href="#">national</a>{" "}
                        <a href="#">photographer</a> <a href="#">produce</a>{" "}
                        <a href="#">producer</a> <a href="#">review</a>{" "}
                        <a href="#">short film</a> <a href="#">tutorial</a>{" "}
                        <a href="#">video</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
