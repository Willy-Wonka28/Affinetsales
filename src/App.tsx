import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/verify" element={<VerifyEmail/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/classroom" element={
            <Layout>
              <ClassroomPage />
            </Layout>
          } />
          <Route path="/announcements" element={
            <Layout>
              <Announcements />
            </Layout>
          } />
          <Route path="/top-earners" element={
            <Layout>
              <TopEarners />
            </Layout>
          } />
          <Route path="/community" element={
            <Layout>
              <Community />
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <Settings />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <ContactPage />
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
