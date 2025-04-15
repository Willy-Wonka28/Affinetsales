import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const EmailCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVerifying, setIsVerifying] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyEmail = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const error = urlParams.get("error");

      if (error) {
        setErrorMessage("Verification link expired or invalid.");
        setVerified(false);
      } else {
        setVerified(true);
      }

      setIsVerifying(false);
    };

    verifyEmail();
  }, []);

  useEffect(() => {
    if (!isVerifying) {
      if (verified) {
        toast({
          title: "Success!",
          description: "Your email has been verified! You can now log in.",
        });
        setTimeout(() => navigate("/"), 3000);
      } else {
        toast({
          title: "Verification Failed",
          description: errorMessage || "There was an error verifying your email.",
          variant: "destructive",
        });
        setTimeout(() => navigate("/verify"), 3000);
      }
    }
  }, [isVerifying, verified, errorMessage, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 max-w-md px-4">
        {isVerifying ? (
          <div>Verifying...</div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold text-brand-blue mb-4">
              {verified ? "Email Verified!" : "Verification Failed"}
            </h1>
            <p className="text-gray-600 mb-8">
              {verified
                ? "Your email has been successfully verified. You can now log in!"
                : errorMessage || "There was an error with the verification. Please try again."}
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button asChild className="bg-brand-green hover:bg-brand-green/90">
                <a href="/">Return to Home</a>
              </Button>
              <Button asChild className="bg-brand-green hover:bg-brand-green/90">
                <a href="/verify">Verify Email Again</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailCheck;
