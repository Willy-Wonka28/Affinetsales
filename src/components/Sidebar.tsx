
import React, {useState, forwardRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '@/client/supabase.ts';
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
import { MoonLoader } from  'react-spinners';

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


const Sidebar = forwardRef<HTMLElement, SidebarProps>(({ collapse }, ref)  => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("Logging Out...")
  const location = useLocation();
  const navigate = useNavigate()
  
  async function handleLogOut(){
    console.log("Logging out...")
    setLoading(true)
    let { error } = await supabase.auth.signOut()
  
    if(error){
      setLoading(false)
      setMessage("LogOut error")
      console.log("LogOut error:", error)
    }
  
    if(!error){ 
      console.log("LogOut successful")
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
   
  }

  
  return (
    <>

      {loading && (
        <div className="min-h-screen absolute inset-0 flex items-center justify-center bg-gray-400/20 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <MoonLoader color='#00D78A' loading={loading} size={50} />
              <p className="mt-2 text-gray-700 font-semibold">{message}</p>
            </div>
          </div>
        )}


     {/* Sidebar */}
      <AnimatePresence>
      {collapse &&
      <motion.aside
        ref = {ref}
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
                <motion.li key={item.href}
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
          <button
            className="sidebar-link text-white hover:text-red-500"
            onClick={(e) =>{
              e.preventDefault()
              handleLogOut()}}>
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>}
      </AnimatePresence>
    </>
  );
});

export default Sidebar;
