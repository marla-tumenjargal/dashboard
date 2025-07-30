'use client';

import './globals.css';
import Header from './components/Navigation';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    // Listen for a custom event when scrapbook completes
    const handleScrapbookComplete = () => {
      setShowNavigation(true);
    };

    window.addEventListener('scrapbook-complete', handleScrapbookComplete);
    
    return () => {
      window.removeEventListener('scrapbook-complete', handleScrapbookComplete);
    };
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        {/* Conditional vertical line - only show after scrapbook */}
        {showNavigation && (
          <div className="fixed top-0 bottom-0 left-[calc(5vw+theme(spacing.1)+var(--nav-width,150px))] w-px bg-gray-300 z-10" />
        )}
        
        {/* Main area: nav + page content side by side */}
        <div className="flex flex-grow min-h-0">
          {/* Left: Navigation container - only show after scrapbook */}
          {showNavigation && (
            <div className="flex flex-col h-full pt-16 pl-[5vw] pr-10">
              <Header />
            </div>
          )}

          {/* Right: Page content */}
          <main className={`flex-1 px-6 py-24 ${showNavigation ? 'max-w-3xl' : 'max-w-none'}`}>
            {children}
          </main>
        </div>

        {/* Footer - only show after scrapbook */}
        {showNavigation && (
          <div className="pt-8">
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}