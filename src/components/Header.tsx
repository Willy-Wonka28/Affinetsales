import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, User, BellRing } from 'lucide-react';
import { BeatLoader } from 'react-spinners';
import Sidebar from './Sidebar';
import { userContext } from '@/App';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/client/supabase';

// Helper function to get announcements
async function getAnnouncements() {
  const { data, error } = await supabase.from("announcements").select();
  if (error) throw error;
  return data;
}

const Header = () => {
  const { userName } = useContext(userContext);
  const [collapse, setCollapse] = useState(false);
  const [hasNewAnnouncements, setHasNewAnnouncements] = useState(false);

  const sideBarRef = useRef(null);

  function handleCollapse() {
    setCollapse(!collapse);
  }

  function handleOutsideClick(e: MouseEvent) {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setCollapse(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => document.removeEventListener("click", handleOutsideClick, true);
  }, [collapse]);

 
  const { data: announcements, isLoading } = useQuery({
    queryKey: ["ann"],
    queryFn: getAnnouncements,
    refetchInterval: 100000, 
  });

  useEffect(() => {
    if (announcements && announcements.length > 0) {
      const latestAnnouncementDate = new Date(announcements[0].date);
      const currentDate = new Date();
      if (latestAnnouncementDate.toDateString() === currentDate.toDateString()) {
        setHasNewAnnouncements(true);
      }
    }
  }, [announcements]);

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

          {/* Dropdown with bell as trigger */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <BellRing className="w-5 h-5 relative">
                  {hasNewAnnouncements && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
                  )}
                </BellRing>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* Show message based on new announcements */}
              <DropdownMenuItem>
                {hasNewAnnouncements ? (
                  "There's a new announcement!"
                ) : (
                  "No new announcements."
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Button */}
          <Button variant="outline" className="bg-[#F1F5F9] flex items-center gap-2">
            <span className="text-lg">{userName ? userName : <BeatLoader color="#00D78A" loading={true} size={5} />}</span>
            <User />
          </Button>

          {collapse ? <X onClick={handleCollapse}/> : <Menu onClick={handleCollapse}/>}
        </nav>

        <Sidebar ref={sideBarRef} collapse={collapse} />
      </div>
    </header>
  );
};

export default Header;
