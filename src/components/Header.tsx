import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {Menu, X, User} from 'lucide-react'
import Sidebar from './Sidebar';



const Header = () => {
  const[collapse, setCollapse] = useState(false)

  function handleCollapse(){
    setCollapse(!collapse)
  
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between py-10 px-4 h-16">
      <div className="flex justify-center items-center my-5">
          <img
            className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
            src="/img/logo.png"
            alt="Logo"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Button variant="outline" className="bg-[#F1F5F9] flex items-center gap-2">
            {/* put user first name here */}
            <span className='text-lg'>Testoor</span>
            <User />
          </Button>
          {collapse ? <X onClick={handleCollapse}/> : <Menu onClick={handleCollapse}/>}
        </nav>

        <Sidebar collapse={collapse} />

      </div>
    </header>
  );
};

export default Header;
