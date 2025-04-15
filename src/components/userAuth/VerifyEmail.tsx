import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../../client/supabase.ts';
import { MoonLoader } from  'react-spinners';


const VerifyEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")  


  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setMessage("Sending verification email..."); 
    
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
      });
      
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Verification email sent! Redirecting to Home Page...");
        setLoading(false);
        navigate("/")
      }
    } catch (err: any) {
      setMessage(`Unexpected error: ${err.message}`);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
          {/* spinner overlay */}
          {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400/20 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <MoonLoader color='#00D78A' loading={loading} size={50} />
            <p className="mt-2 font-semibold">{message}</p>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <h1 className="text-2xl font-semibold pb-3">Your email is not verified.</h1>
      <h1 className="text-2xl font-semibold pb-3">Please, verify your email address</h1>

        <form className="space-y-4">
          <div className="relative">
            <input
             required
              type="email"
              placeholder="Email"
              onChange={(e) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (emailRegex.test(e.target.value)) {
                  setEmail(e.target.value)
                  setShowError(false)
                }else{
                  setShowError(true)
                }
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D78A] focus:border-transparent"
            />
            <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          {showError && <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>}


          <button
            type="submit"
            className={`w-full bg-[#00D78A] text-white rounded-lg px-4 py-3 font-semibold`}
            onClick={handleResend}
          >
            Send Verification Link
          </button>
        </form>

      </div>
    </div>
  );
};


export default VerifyEmail