import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NavDropdown - Navigation item with dropdown submenu
 * Supports nested dropdowns for multi-level menus
 * @param {Object} props
 * @param {string} props.label - Display text for the dropdown trigger
 * @param {string} props.href - Link destination (usually "#" for dropdowns)
 * @param {string} props.dataText - data-text attribute for animations
 * @param {string} props.dropdownId - Unique ID for the dropdown (for Bootstrap)
 * @param {Array} props.children - Array of child menu items
 * @param {boolean} props.scrollspy - Whether this is a scrollspy link
 * @param {boolean} props.active - Whether this item is active
 * @param {boolean} props.isNested - Whether this is a nested dropdown (inside another dropdown)
 */
export const NavDropdown = ({ 
  label, 
  href, 
  dataText, 
  dropdownId, 
  children, 
  scrollspy, 
  active,
  isNested = false 
}) => {
  const itemClasses = isNested ? 'dropdown' : 'dropdown' + (active ? ' active' : '');
  const linkClasses = isNested 
    ? 'dropdown-item' + (scrollspy ? ' scrollspy_btn' : '')
    : 'nav-link' + (scrollspy ? ' scrollspy_btn' : '');
  
  return (
    <li className={itemClasses}>
      <a 
        className={linkClasses}
        href={href}
        id={dropdownId}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="nav_link_label" data-text={dataText || label}>
          {label}
        </span>
        <span className="nav_link_icon">
          <i className={isNested ? "fa-solid fa-angle-right" : "fa-solid fa-angle-down"}></i>
        </span>
      </a>
      <ul className="dropdown-menu" aria-labelledby={dropdownId}>
        {children.map((child) => {
          if (child.hasDropdown) {
            // Nested dropdown
            return (
              <NavDropdown
                key={child.id}
                label={child.label}
                href={child.href || '#'}
                dataText={child.dataText}
                dropdownId={child.dropdownId}
                children={child.children}
                scrollspy={child.scrollspy}
                active={child.active}
                isNested={true}
              />
            );
          } else {
            // Regular dropdown item
            const itemLinkClasses = child.scrollspy 
              ? 'dropdown-item scrollspy_btn' 
              : 'dropdown-item';
            
            // If it's an anchor link (starts with #), use regular <a> tag
            // Otherwise use React Router Link
            const isAnchor = child.href && child.href.startsWith('#');
            
            return (
              <li key={child.id} className={child.active ? 'active' : ''}>
                {isAnchor ? (
                  <a className={itemLinkClasses} href={child.href}>
                    <span className="nav_link_label">{child.label}</span>
                  </a>
                ) : (
                  <Link className={itemLinkClasses} to={child.href}>
                    <span className="nav_link_label">{child.label}</span>
                  </Link>
                )}
              </li>
            );
          }
        })}
      </ul>
    </li>
  );
};
