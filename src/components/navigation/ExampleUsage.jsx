import React from 'react';
import { Header } from '../components/navigation';

/**
 * Example Page Component
 * This demonstrates how to use the modular navigation components
 */
const ExamplePage = () => {
  return (
    <div className="page_wrapper">
      {/* Navigation Header */}
      <Header 
        logoSrc="assets/images/site_logo/site_logo_1.svg"
        logoAlt="ICO Site Logo"
        logoLink="index.html"
      />

      {/* Main Content */}
      <main className="page_content">
        <h1>Your Page Content Here</h1>
        <p>The navigation header will render above this content.</p>
      </main>
    </div>
  );
};

export default ExamplePage;
