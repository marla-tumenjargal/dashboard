'use client';

import './globals.css';
import Header from './components/Navigation';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isFullWindow, setIsFullWindow] = useState(true);

  useEffect(() => {
    const handleScrapbookComplete = () => {
      setShowNavigation(true);
    };
    window.addEventListener('scrapbook-complete', handleScrapbookComplete);

    const checkFullWindow = () => {
      setIsFullWindow(window.innerWidth >= 1440);
    };

    checkFullWindow();
    window.addEventListener('resize', checkFullWindow);

    return () => {
      window.removeEventListener('scrapbook-complete', handleScrapbookComplete);
      window.removeEventListener('resize', checkFullWindow);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/header.png" type="image/png" />
        <link rel="shortcut icon" href="/header.png" type="image/png" />
        <link rel="apple-touch-icon" href="/header.png" />
      </head>
      <body className="flex flex-col min-h-screen relative bg-white text-black">
        {/* Vertical line for navigation */}
        {showNavigation && isFullWindow && (
          <div className="fixed top-0 bottom-0 left-[calc(4vw+theme(spacing.1)+var(--nav-width,150px))] w-px bg-gray-300 z-10" />
        )}

        <div className="flex flex-grow min-h-0">
          {showNavigation && (
            <div className="flex flex-col h-full pt-19 pl-[5vw] pr-10">
              <Header />
            </div>
          )}

          <main
            className={`flex-1 px-6 py-24 bg-white ${showNavigation ? 'max-w-3xl' : 'max-w-none'}`}
          >
            {children}
          </main>
        </div>

        {showNavigation && <div className="pt-8"><Footer /></div>}
      </body>
    </html>
  );
}
