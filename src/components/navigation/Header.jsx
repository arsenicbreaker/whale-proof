import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { navigationMenu } from '../../data/navigationMenu';
import { useAuth } from '../../context/AuthContext';

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
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const displayName = useMemo(
    () => profile?.username || user?.email?.split('@')[0] || 'Trader',
    [profile?.username, user?.email],
  );

  const isDashboardView =
    Boolean(user) &&
    (location.pathname === '/dashboard' || location.pathname === '/modules');

  const menuItems = navigationMenu;

  async function handleSignOut() {
    setIsSigningOut(true);

    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out failed.', error);
    } finally {
      setIsSigningOut(false);
    }
  }

  const headerActions = !user
    ? [
        {
          id: 'login',
          label: 'Login',
          to: '/sign_in',
          iconClassName: 'fa-solid fa-user',
        },
        {
          id: 'register',
          label: 'Register',
          to: '/sign_up',
          iconClassName: 'fa-solid fa-arrow-up-right-from-square',
        },
      ]
    : isDashboardView
    ? [
        {
          id: 'logout',
          label: isSigningOut ? '...' : 'Logout',
          iconClassName: 'fa-solid fa-right-from-bracket',
          onClick: handleSignOut,
          disabled: isSigningOut,
        },
      ]
    : [
        {
          id: 'dashboard',
          label: 'Dashboard',
          to: '/dashboard',
          iconClassName: 'fa-solid fa-shield-halved',
        },
        {
          id: 'logout',
          label: isSigningOut ? '...' : 'Logout',
          iconClassName: 'fa-solid fa-right-from-bracket',
          onClick: handleSignOut,
          disabled: isSigningOut,
        },
      ];

  const headerClassName = isDashboardView
    ? 'site_header wp-site-header--dashboard'
    : 'site_header';
  const logoColumnClassName = isDashboardView
    ? 'col-lg-4 col-7 d-flex align-items-center'
    : 'col-lg-3 col-5 d-flex align-items-center';
  const navColumnClassName = isDashboardView
    ? 'col-lg-3 d-none d-lg-flex justify-content-center'
    : 'col-lg-6 col-2';
  const actionsColumnClassName = isDashboardView
    ? 'col-lg-5 col-5'
    : 'col-lg-3 col-5';

  return (
    <header className={headerClassName}>
      <div className="nav_wrapper">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className={logoColumnClassName}>
              <div className="site_logo">
                <Link className="site_link" to={logoLink}>
                  <img loading="lazy" src={logoSrc} alt={logoAlt} />
                </Link>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className={navColumnClassName}>
              {isDashboardView ? (
                <div className="wp-dashboard-header__nav" aria-label="Current section">
                  <span className="wp-dashboard-header__eyebrow">Workspace</span>
                  <span className="wp-dashboard-header__title">Dashboard</span>
                </div>
              ) : (
                <Navbar menuItems={menuItems} />
              )}
            </div>

            {/* Action Buttons */}
            <div className={actionsColumnClassName}>
              <ul
                className={`btns_group unordered_list p-0 justify-content-end wp-header-user${
                  isDashboardView ? ' wp-header-user--dashboard' : ''
                }`}
              >
                {/* Mobile Menu Toggle */}
                {!isDashboardView ? (
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
                ) : null}
                
                {loading ? null : (
                  <>
                    {user ? (
                      <li className="wp-header-user__identity">
                        <span className="wp-header-user__welcome">Welcome {displayName}</span>
                      </li>
                    ) : null}

                    {headerActions.map((action) => (
                      <li key={action.id}>
                        {action.to ? (
                          <Link className="ico_btn_outline" to={action.to}>
                            <span className="btn_icon">
                              <i className={action.iconClassName}></i>
                            </span>
                            <span className="btn_label">{action.label}</span>
                          </Link>
                        ) : (
                          <button
                            className="ico_btn_outline"
                            type="button"
                            onClick={action.onClick}
                            disabled={action.disabled}
                          >
                            <span className="btn_icon">
                              <i className={action.iconClassName}></i>
                            </span>
                            <span className="btn_label">{action.label}</span>
                          </button>
                        )}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
