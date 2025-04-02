
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      
      <div className="flex flex-1">
        
        <main className="flex-1 px-4 py-6">
          <div className="container mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
