import React from 'react';
import { PageLayout } from '../../layout';

export const SignInPage = () => {
  return (
    <PageLayout 
      bodyClass="index_ico" 
      title="Login - WhaleProof"
    >
      {/* Register Section - Start */}
      <section className="register_section section_decoration">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 position-relative">
              <div className="register_form">
                <h1 className="heading_text text-center">Login to Your Account</h1>
                <p className="text-center">Enter your details to login.</p>
                <a className="btn_login_google" href="#!">
                  <span className="icon">
                    <img src="assets/icons/icon_google.svg" alt="Google Icon" />
                  </span>
                  <span className="label">Continue with Google</span>
                </a>
                <div className="divider">
                  <img src="assets/images/shapes/shape_divider.svg" alt="Divider" />
                </div>
                <div className="form-group">
                  <label className="input_title" htmlFor="input_email">Email<sup>*</sup></label>
                  <input id="input_email" className="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required="" />
                </div>
                <div className="form-group">
                  <label className="input_title" htmlFor="input_pass">Password<sup>*</sup></label>
                  <input id="input_pass" className="form-control" type="password" name="password" placeholder="***********" required="" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="checkbox_remember_me" />
                      <label className="form-check-label" htmlFor="checkbox_remember_me">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="forget_pass text-md-end mb-0">Forgot password? <a href="#!"><u>Reset</u></a></p>
                  </div>
                </div>
                <button className="btn" type="submit">
                  <span className="btn_label">Login</span>
                  <span className="btn_icon"><i className="fa-regular fa-arrow-up-right"></i></span>
                </button>
              </div>
              <div className="decoration_item shape_flower">
                <img src="assets/images/shapes/shape_flower_1.svg" alt="Flower" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Register Section - End */}
    </PageLayout>
  );
};
