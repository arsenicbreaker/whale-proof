import React from 'react';
import { NavItem } from './NavItem';
import { NavDropdown } from './NavDropdown';

/**
 * Navbar - Main navigation container
 * Renders navigation items based on navigationMenu data
 * @param {Object} props
 * @param {Array} props.menuItems - Array of menu configuration objects
 */
export const Navbar = ({ menuItems }) => {
  return (
    <nav className="main_menu navbar navbar-expand-lg">
      <div 
        className="main_menu_inner collapse navbar-collapse justify-content-center" 
        id="main_menu_dropdown"
      >
        <ul className="main_menu_list unordered_list text-uppercase">
          {menuItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <NavDropdown
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  dataText={item.dataText}
                  dropdownId={item.dropdownId}
                  children={item.children}
                  scrollspy={item.scrollspy}
                  active={item.active}
                />
              );
            } else {
              return (
                <NavItem
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  dataText={item.dataText}
                  scrollspy={item.scrollspy}
                  active={item.active}
                />
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};
