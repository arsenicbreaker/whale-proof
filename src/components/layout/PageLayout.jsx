import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../navigation';
import { Footer } from './Footer';
import { refreshTemplateScripts } from '../../app/externalScripts';

/**
 * PageLayout - Wrapper component for all pages
 * Handles common layout elements, body class, title, and script initialization
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.bodyClass - Class to apply to body element
 * @param {string} props.title - Page title
 * @param {boolean} props.showFooter - Whether to show footer (default: false)
 */
export const PageLayout = ({ children, bodyClass = 'index_ico', title = 'WhaleProof', showFooter = false }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.className = bodyClass;
    document.title = title;

    const syncTemplateBehavior = async () => {
      await refreshTemplateScripts();

      if (location.hash) {
        requestAnimationFrame(() => {
          document.querySelector(location.hash)?.scrollIntoView();
        });
        return;
      }

      window.scrollTo(0, 0);
    };

    syncTemplateBehavior().catch((error) => {
      console.error('Page script refresh failed.', error);
    });
  }, [bodyClass, location.hash, location.pathname, title]);

  return (
    <div className="page_wrapper">
      {/* Back To Top */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      {/* Preloader */}
      <div id="preloader">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="page_content">
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};
