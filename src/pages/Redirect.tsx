
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Unverified user attempted to access page:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 max-w-md px-4">
        <h1 className="text-6xl font-bold text-brand-blue">Your email is unverified</h1>
        <p className="text-gray-600 mb-8">
          This page is only accessible to users with verified emails. Please verify your email before accessing this page.
        </p>
        <div className="flex justify-center items-center gap-4">
        <Button asChild className="bg-brand-green hover:bg-brand-green/90">
          <Link to="/dashboard">Return to Dashboard</Link>
        </Button>
        <Button asChild className="bg-brand-green hover:bg-brand-green/90">
        <Link to="/verify">Verify email</Link>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
