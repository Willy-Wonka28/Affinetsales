
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  GraduationCap, 
  BellRing, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  collapse: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    href: '/dashboard',
  },
  {
    label: 'Classroom',
    icon: <GraduationCap className="w-5 h-5" />,
    href: '/classroom',
  },
  {
    label: 'Announcements',
    icon: <BellRing className="w-5 h-5" />,
    href: '/announcements',
  },
  {
    label: 'Top Earners',
    icon: <TrendingUp className="w-5 h-5" />,
    href: '/top-earners',
  },
  {
    label: 'Community',
    icon: <Users className="w-5 h-5" />,
    href: '/community',
  },
  {
    label: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    href: '/settings',
  },
];

const Sidebar = ({collapse}: SidebarProps) => {
  const location = useLocation();
  
  return (
    <>
      
      {/* Sidebar */}
      <AnimatePresence>
      {collapse &&
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: collapse ? 0 : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-56 bg-brand-blue flex flex-col",
        )}
      >

        <nav className="flex-1 overflow-y-auto mt-4 py-4 px-3">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const index = navItems.indexOf(item)
              return (
                <motion.li key={item.label}
                initial={{ x: '-100%' }}
                animate={{ x: collapse ? 0 : '-100%' }}
                exit={{ x: '-100%' }}
                transition={{ duration: (index/7)+0.5 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "text-white sidebar-link",
                      isActive && "active"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            to="/logout"
            className="sidebar-link text-white hover:text-red-500"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </motion.aside>}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
