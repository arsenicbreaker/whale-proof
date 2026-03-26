import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NavItem - Single navigation menu item without dropdown
 * @param {Object} props
 * @param {string} props.label - Display text for the nav item
 * @param {string} props.href - Link destination
 * @param {string} props.dataText - data-text attribute for animations
 * @param {boolean} props.scrollspy - Whether this is a scrollspy link
 * @param {boolean} props.active - Whether this item is active
 */
export const NavItem = ({ label, href, dataText, scrollspy, active }) => {
  const linkClasses = scrollspy ? 'nav-link scrollspy_btn' : 'nav-link';
  
  // If it's an anchor link (starts with #), use regular <a> tag
  // Otherwise use React Router Link
  const isAnchor = href && href.startsWith('#');
  
  return (
    <li className={active ? 'active' : ''}>
      {isAnchor ? (
        <a className={linkClasses} href={href}>
          <span className="nav_link_label" data-text={dataText || label}>
            {label}
          </span>
        </a>
      ) : (
        <Link className={linkClasses} to={href}>
          <span className="nav_link_label" data-text={dataText || label}>
            {label}
          </span>
        </Link>
      )}
    </li>
  );
};
