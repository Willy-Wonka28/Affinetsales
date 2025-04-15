import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import Settings from "./pages/Settings";
import ContactPage from "./pages/ContactPage";
import ConnectPage from "./pages/ConnectPage";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";
import { createContext, useState, useEffect } from "react";
import { supabase } from '@/client/supabase';

interface UserContextType {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}

const queryClient = new QueryClient();
export const userContext = createContext<UserContextType>({
  userName: null,
  setUserName: () => {}
});

const App = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isVerified, setIsVerified] = useState<boolean | null>(null); 

  useEffect(() => {
    const checkSession = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        const firstName = session.user.user_metadata?.first_name;
        if (firstName) {
          setUserName(firstName);
        }

        // Check if email is verified
        if (session.user.email_confirmed_at || session.user.app_metadata?.email_confirmed_at) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    // auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event);
        
        if (event === 'SIGNED_IN' && session) {
          setIsAuthenticated(true);
          const firstName = session.user.user_metadata?.first_name;
          if (firstName) {
            setUserName(firstName);
          }

          if (session.user.email_confirmed_at || session.user.app_metadata?.email_confirmed_at) {
            setIsVerified(true);
          } else {
            setIsVerified(false);
          }
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
          setUserName(null);
          setIsVerified(false);
        }
      }
    );

    checkSession();

    // Cleanup
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // PrivateRoute component that wraps any route and handles the redirection logic
  
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signup" replace />;
    }

    if (!isVerified) {
      return <Navigate to="/redirect" replace />;
    }

    return children;
  };

  return (
    <userContext.Provider value={{ userName: userName, setUserName }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify" element={<VerifyEmail />} />
              <Route path="/redirect" element={<Redirect />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              
              {/* Protected Routes (only for authenticated and verified users) */}
              <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
              <Route path="/classroom" element={<PrivateRoute><Layout><ClassroomPage /></Layout></PrivateRoute>} />
              <Route path="/announcements" element={<PrivateRoute><Layout><Announcements /></Layout></PrivateRoute>} />
              <Route path="/top-earners" element={<PrivateRoute><Layout><TopEarners /></Layout></PrivateRoute>} />
              <Route path="/settings" element={<PrivateRoute><Layout><Settings /></Layout></PrivateRoute>} />
              
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
