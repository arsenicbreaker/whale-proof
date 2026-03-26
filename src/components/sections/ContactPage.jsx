import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../layout';

export const ContactPage = () => {
  return (
    <PageLayout 
      bodyClass="index_ico" 
      title="Contact - WhaleProof"
      showFooter={true}
    >
      {/* Hero Section - Start */}
      <section className="page_header text-center">
        <div className="container">
          <h1 className="page_title">Contact Us</h1>
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><Link to="/">Coinpay</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </div>
      </section>
      {/* Hero Section - End */}

      {/* Contact Section - Start */}
      <section className="contact_section section_space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="comment_form mb-0">
                <h3 className="details_info_title">Send Us a Message</h3>
                <p>Got a question? Fill out the form, and we'll get back to you shortly!</p>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_name">Name<sup>*</sup></label>
                        <input id="input_name" className="form-control" type="text" name="name" placeholder="Carlo Castillo" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_email">Email<sup>*</sup></label>
                        <input id="input_email" className="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">Phone<sup>*</sup></label>
                        <input id="input_phone" className="form-control" type="tel" name="phone" placeholder="(+880) 1680-6361-89" required />
                      </div>
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_message">Cover Letter<sup>*</sup></label>
                        <textarea id="input_message" className="form-control" name="message" placeholder="Write about your self..." required></textarea>
                      </div>
                      <button className="btn" type="submit">
                        <span className="btn_label">Post Comment</span>
                        <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact_info_box">
                <ul className="contact_info_list unordered_list_block">
                  <li>
                    <a href="#!">
                      <span className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span className="label">+(1) 1230 452 8597</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <span className="label">Coinpay@example.com</span>
                    </a>
                  </li>
                </ul>
                <ul className="social_block style_4 unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <hr />
                <ul className="iconlist_block unordered_list_block">
                  <li>
                    <span className="iconlist_label">
                      United States Office
                      <small className="iconlist_info">
                        Sunshine example park, Floor No 05A,Sector-94,
                      </small>
                    </span>
                  </li>
                  <li>
                    <span className="iconlist_label">
                      United Kingdom Office
                      <small className="iconlist_info">
                        12 Buckingham Rd, example Thwaite, HG3 4 TY, UK Contact
                      </small>
                    </span>
                  </li>
                </ul>
                <hr />
                <ul className="iconlist_block unordered_list_block">
                  <li>
                    <span className="iconlist_label">
                      Our Office Open Time
                      <small className="iconlist_info d-block">
                        Mon - Sat: 08.00 AM - 05.00 PM
                      </small>
                      <small className="iconlist_info d-block">
                        Sunday: Closed
                      </small>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gmap_canvas">
            <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
      </section>
      {/* Contact Section - End */}
    </PageLayout>
  );
};
