import React from "react";

function BlogListPage() {
  return (
    <div>
      {/* <div className="section page-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center-sm">
                <h1 className="title">Blog Update</h1>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>Blog List 02</li>
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
            <div className="col-sm-12">
              <div className="blog-list">
                <div className="blog-list-item style-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="post-thumbnail">
                        <a href="/single">
                          <img src="/images/blog/blog_15.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="entry-desc col-md-8">
                      <div className="list-categories">
                        <a href="#">Featured</a>
                      </div>
                      <a href="/single">
                        <h3 className="entry-title">
                          The Story of Ferguson through the Eyes of the People
                          Who Lived it
                        </h3>
                      </a>
                      <div className="meta">
                        <span className="view">170 Views</span>
                        <span className="like">
                          <a href="#" className="like-btn">
                            2 Likes
                          </a>
                        </span>
                        <span className="comment">0 Comment</span>
                      </div>
                      <div className="entry-content">
                        By the time we wrapped our last shooting day, we had
                        collected over 300 hours of footage. Lungs shouted for
                        justice and...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-list-item style-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="post-thumbnail">
                        <a href="/single">
                          <img src="/images/blog/blog_16.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="entry-desc col-md-8">
                      <div className="list-categories">
                        <a href="#">News</a>
                      </div>
                      <a href="/single">
                        <h3 className="entry-title">
                          “Communication Is Where a Film Lives and Dies”:
                          Director Zoe Lister-Jones
                        </h3>
                      </a>
                      <div className="meta">
                        <span className="view">147 Views</span>
                        <span className="like">
                          <a href="#" className="like-btn">
                            0 Like
                          </a>
                        </span>
                        <span className="comment">0 Comment</span>
                      </div>
                      <div className="entry-content">
                        Communication is where a film lives and dies. It is
                        essential for efficacy, for performance, and ultimately
                        for translating a director’s vision...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-list-item style-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="post-thumbnail">
                        <a href="/single">
                          <img src="/images/blog/blog_17.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="entry-desc col-md-8">
                      <div className="list-categories">
                        <a href="#">Video</a>
                      </div>
                      <a href="/single">
                        <h3 className="entry-title">
                          Profound Communication Only Happens When There Is
                          Persistence
                        </h3>
                      </a>
                      <div className="meta">
                        <span className="view">133 Views</span>
                        <span className="like">
                          <a href="#" className="like-btn">
                            1 Like
                          </a>
                        </span>
                        <span className="comment">0 Comment</span>
                      </div>
                      <div className="entry-content">
                        I often ask myself, how does each of us weave our own
                        responsibilities into the pattern of history? How can I
                        tell...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-list-item style-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="post-thumbnail">
                        <a href="/single">
                          <img src="/images/blog/blog_18.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="entry-desc col-md-8">
                      <div className="list-categories">
                        <a href="#">Gallery</a>
                      </div>
                      <a href="/single">
                        <h3 className="entry-title">
                          “The Challenge Is Balancing Tone”: Director Mark
                          Pellington
                        </h3>
                      </a>
                      <div className="meta">
                        <span className="view">108 Views</span>
                        <span className="like">
                          <a href="#" className="like-btn">
                            1 Like
                          </a>
                        </span>
                        <span className="comment">0 Comment</span>
                      </div>
                      <div className="entry-content">
                        The communication challenge in executing The Last Word
                        was thematic. With issues of aging or mortality, the
                        challenge is balancing tone. That...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-list-item style-2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="post-thumbnail">
                        <a href="/single">
                          <img src="/images/blog/blog_19.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="entry-desc col-md-8">
                      <div className="list-categories">
                        <a href="#">News</a>
                      </div>
                      <a href="/single">
                        <h3 className="entry-title">
                          “We Are Living through a Divisive Time”: Director
                          Barbara Kopple
                        </h3>
                      </a>
                      <div className="meta">
                        <span className="view">161 Views</span>
                        <span className="like">
                          <a href="#" className="like-btn">
                            2 Likes
                          </a>
                        </span>
                        <span className="comment">0 Comment</span>
                      </div>
                      <div className="entry-content">
                        Obviously we are living through a very divisive time,
                        and transgender issues are among the most controversial
                        of what people call “the...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination">
                <a className="prev page-numbers" href="#">
                  Previous
                </a>
                <a className="page-numbers" href="#">
                  1
                </a>
                <span className="page-numbers current">2</span>
                <a className="page-numbers" href="#">
                  3
                </a>
                <a className="next page-numbers" href="#">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogListPage;
