import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { navigationMenu } from '../../data/navigationMenu';

/**
 * Header - Main header wrapper component
 * Contains logo, navigation menu, and action buttons
 * @param {Object} props
 * @param {string} props.logoSrc - Path to logo image
 * @param {string} props.logoAlt - Alt text for logo
 * @param {string} props.logoLink - Logo link destination
 */
export const Header = ({ 
  logoSrc = 'assets/images/site_logo/site_logo_1.svg',
  logoAlt = 'ICO Site Logo',
  logoLink = '/'
}) => {
  return (
    <header className="site_header">
      <div className="nav_wrapper">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-lg-3 col-5 d-flex align-items-center">
              <div className="site_logo">
                <Link className="site_link" to={logoLink}>
                  <img loading="lazy" src={logoSrc} alt={logoAlt} />
                </Link>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="col-lg-6 col-2">
              <Navbar menuItems={navigationMenu} />
            </div>

            {/* Action Buttons */}
            <div className="col-lg-3 col-5">
              <ul className="btns_group unordered_list p-0 justify-content-end">
                {/* Mobile Menu Toggle */}
                <li className="d-lg-none">
                  <button 
                    className="mobile_menu_btn" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#main_menu_dropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                
                {/* Login Button */}
                <li>
                  <Link className="ico_btn_outline" to="/sign_in">
                    <span className="btn_icon">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <span className="btn_label">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
