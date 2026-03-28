import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../layout';

export const BlogPage = () => {
  return (
    <PageLayout 
      bodyClass="index_ico" 
      title="Blogs - WhaleProof"
      showFooter={true}
    >
      {/* Hero Section - Start */}
      <section className="page_header text-center">
        <div className="container">
          <h1 className="page_title">Our Blog</h1>
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><Link to="/">Coinpay</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Our Blogs</li>
          </ol>
        </div>
      </section>
      {/* Hero Section - End */}

      {/* Blog Section - Start */}
      <section className="blog_section section_space pt-0">
        <div className="container">
          <div className="blog_carousel_block swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: "url('assets/images/blogs/blog_post_image_1.webp')"
                }}
              >
                <div className="post_info">
                  <div className="badge"># ICO Groth</div>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      How Our Unique Tokenomics Ensures Sustainable Growth and
                      Value?
                    </Link>
                  </h3>
                  <p className="blog_post_description mb-0">
                    Our unique tokenomics is designed to ensure sustainable growth
                    and long-term value by balancing token supply and demand,
                    rewarding community participation.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: "url('assets/images/blogs/blog_post_image_2.webp')"
                }}
              >
                <div className="post_info">
                  <div className="badge"># Ethereum ICO</div>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      Why Ethereum is the Ideal Blockchain Platform for Successful
                      ICO..
                    </Link>
                  </h3>
                  <p className="blog_post_description mb-0">
                    Ethereum is the ideal blockchain for ICOs due to its secure
                    smart contracts and decentralization. It enables transparent,
                    direct fundraising from global.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: "url('assets/images/blogs/blog_post_image_1.webp')"
                }}
              >
                <div className="post_info">
                  <div className="badge"># ICO Groth</div>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      How Our Unique Tokenomics Ensures Sustainable Growth and
                      Value?
                    </Link>
                  </h3>
                  <p className="blog_post_description mb-0">
                    Our unique tokenomics is designed to ensure sustainable growth
                    and long-term value by balancing token supply and demand,
                    rewarding community participation.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: "url('assets/images/blogs/blog_post_image_2.webp')"
                }}
              >
                <div className="post_info">
                  <div className="badge"># Ethereum ICO</div>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      Why Ethereum is the Ideal Blockchain Platform for Successful
                      ICO..
                    </Link>
                  </h3>
                  <p className="blog_post_description mb-0">
                    Ethereum is the ideal blockchain for ICOs due to its secure
                    smart contracts and decentralization. It enables transparent,
                    direct fundraising from global.
                  </p>
                </div>
              </div>
            </div>
            <div className="bc-pagination"></div>
            <button
              className="bc-button-prev"
              type="button"
              style={{
                backgroundImage: "url('assets/images/shapes/shape_left.svg')"
              }}
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>
            <button
              className="bc-button-next"
              type="button"
              style={{
                backgroundImage: "url('assets/images/shapes/shape_right.svg')"
              }}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
          <div className="row justify-content-lg-between">
            <div className="col-lg-8">
              <div className="blog_post_left_image">
                <Link className="post_image" to="/blog-details">
                  <img
                    src="assets/images/blogs/blog_post_image_3.webp"
                    alt="Post Image"
                  />
                </Link>
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#blockchain</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      What Makes ICOs a Game-Changer for Bitcoin and Crypto
                      Investors?..
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    Our ICO pioneers blockchain innovation, shaping the future.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="blog_post_left_image">
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#ico tips</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      The Importance of Decentralization and How Our ICO Embraces
                      It..
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    Our ICO champions the principles of decentralization, creating
                    a system that prioritizes fairness, ensures transparency, and
                    empowers users to have greater.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="blog_post_left_image">
                <Link className="post_image" to="/blog-details">
                  <img
                    src="assets/images/blogs/blog_post_image_4.webp"
                    alt="Post Image"
                  />
                </Link>
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#ico</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      Behind the Scenes of Our ICO Insights into Project..
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    Our ICO focuses on strategic planning, partnerships.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="blog_post_left_image">
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#blockchain</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      Our Vision for a Blockchain-Powered Future and How You Can
                      Join Us..
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    Our vision is to build a blockchain-powered future, and we
                    invite you to join us in revolutionizing the industry through
                    innovation and decentralization.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="blog_post_left_image">
                <Link className="post_image" to="/blog-details">
                  <img
                    src="assets/images/blogs/blog_post_image_5.webp"
                    alt="Post Image"
                  />
                </Link>
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#investment</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      How We Ensure Security and Protect Your Investment in Our
                      ICO..
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    We ensure security with blockchain, encryption, and audits.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="blog_post_left_image">
                <div className="post_info">
                  <a className="blog_post_category" href="#!">#ico investment</a>
                  <h3 className="blog_post_title">
                    <Link to="/blog-details">
                      Why Joining Our ICO Is More Than an Investment—It's a
                      Revolution..?
                    </Link>
                  </h3>
                  <p className="blog_post_description">
                    Joining our ICO is more than an investment; it's a chance to
                    be part of a revolutionary shift towards decentralization and
                    blockchain innovation.
                  </p>
                  <Link className="btn" to="/blog-details">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <ul
                className="pagination_nav pt-3 unordered_list justify-content-center"
              >
                <li>
                  <a href="#!"><i className="fa-solid fa-angles-left"></i></a>
                </li>
                <li className="active"><a href="#!">1</a></li>
                <li><a href="#!">2</a></li>
                <li><a href="#!">3</a></li>
                <li><a href="#!">...</a></li>
                <li><a href="#!">9</a></li>
                <li>
                  <a href="#!"><i className="fa-solid fa-angles-right"></i></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar pt-5 pt-lg-0 ps-lg-5">
                <div className="sidebar_search_block">
                  <h3 className="sidebar_title">Search</h3>
                  <form className="search_input" action="#">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search Anything..."
                    />
                    <button type="submit">
                      <img src="assets/icons/icon_search.svg" alt="Icon Search" />
                    </button>
                  </form>
                </div>

                <div className="recent_post_block">
                  <h3 className="sidebar_title">Related Posts</h3>
                  <ul className="recent_post_list unordered_list_block">
                    <li>
                      <Link className="recent_post_item" to="/blog-details">
                        <span className="blog_post_title">
                          10 Reasons Our ICO Is Poised for Success the
                          Blockchain..
                        </span>
                        <span className="blog_post_admin">
                          <i className="fa-regular fa-circle-user"></i>
                          By Michael david
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="recent_post_item" to="/blog-details">
                        <span className="blog_post_title">
                          How Blockchain Is Changing the World and Where Our..
                        </span>
                        <span className="blog_post_admin">
                          <i className="fa-regular fa-circle-user"></i>
                          By William thomas
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="recent_post_item" to="/blog-details">
                        <span className="blog_post_title">
                          The Role of Our ICO in Driving Financial Inclusion
                          Through..
                        </span>
                        <span className="blog_post_admin">
                          <i className="fa-regular fa-circle-user"></i>
                          By Christopher
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_category_list">
                  <h3 className="sidebar_title">Categories</h3>
                  <ul className="category_list_block unordered_list_block">
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Cybersecurity</span>
                        <span className="value">(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Blockchain Trends</span>
                        <span className="value">(02)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Digital Transformation</span>
                        <span className="value">(02)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Exchange Listings</span>
                        <span className="value">(04)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Security Alerts</span>
                        <span className="value">(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                        <span className="label">Investor Highlights</span>
                        <span className="value">(07)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_tags">
                  <h3 className="sidebar_title">Popular Tags</h3>
                  <ul className="tags_block unordered_list">
                    <li><a href="#!">Blockchain</a></li>
                    <li><a href="#!">Investments</a></li>
                    <li><a href="#!">Web</a></li>
                    <li><a href="#!">Currency</a></li>
                    <li><a href="#!">Crypto Trading</a></li>
                    <li><a href="#!">ICO</a></li>
                    <li><a href="#!">ICO Blockchain</a></li>
                    <li><a href="#!">Crypto Advisor</a></li>
                    <li><a href="#!">Exchange</a></li>
                    <li><a href="#!">ICO Tokens</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section - End */}
    </PageLayout>
  );
};

export default BlogPage;