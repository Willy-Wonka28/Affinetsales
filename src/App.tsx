import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./components/userAuth/Login";
import SignUp from "./components/userAuth/SignUp";
import ResetPassword from "./components/userAuth/ResetPassword";
import ForgotPassword from "./components/userAuth/ForgotPassword";
import VerifyEmail from "./components/userAuth/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import ClassroomPage from "./pages/ClassroomPage";
import Announcements from "./pages/Announcements";
import TopEarners from "./pages/TopEarners";
// import Community from "./pages/Community";
import Settings from "./pages/Settings";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { createContext, useState, useEffect } from "react";
import { supabase } from '@/client/supabase';

interface UserContextType {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}


const queryClient = new QueryClient();
export const userContext = createContext<UserContextType>({
  userName: null,
  setUserName: ()=>{}
});
const App = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


  useEffect(() => {
    const checkSession = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        const firstName = session.user.user_metadata?.first_name;
        console.log(firstName);
        if (firstName) {
          setUserName(firstName);
        }
      }
      
    };

    //auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event);
        
        if (event === 'SIGNED_IN' && session) {
          setIsAuthenticated(true);
          const firstName = session.user.user_metadata?.first_name;
          if (firstName) {
            setUserName(firstName);
          }
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
          setUserName(null);
        } else if (event === 'USER_UPDATED' && session) {

          const firstName = session.user.user_metadata?.first_name;
          if (firstName) {
            setUserName(firstName);
          }
        }
      }
    );


    checkSession();

    // Cleanup
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <userContext.Provider value={{ userName: userName, setUserName }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/verify" element={<VerifyEmail />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
              <Route path="/classroom" element={<Layout><ClassroomPage /></Layout>} />
              <Route path="/announcements" element={<Layout><Announcements /></Layout>} />
              <Route path="/top-earners" element={<Layout><TopEarners /></Layout>} />
              {/* <Route path="/community" element={<Layout><Community /></Layout>} /> */}
              <Route path="/settings" element={<Layout><Settings /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </userContext.Provider>
  );
};


export default App;
