import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../client/supabase.ts';
import { MoonLoader } from  'react-spinners';


const ResetPassword = () => {
  const navigate = useNavigate(); 

  // Form States
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Disable button if any field is empty
  const isFormValid = password && confirmPassword && password === confirmPassword;

  const handlePasswordClick = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true); // Show spinner

    const { data, error } = await supabase.auth.updateUser({
      password: password,
    })
    
    if(error){
        console.log("Error", error);
        alert(`Error: ${error.message}`);
    }

    setLoading(false); // Hide spinner

    if (data) {
      navigate("/dashboard"); // Redirect if successful
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative">
      {/* spinner overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400/20 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <MoonLoader color='#00D78A' loading={loading} size={50} />
            <p className="mt-2 text-gray-700 font-semibold">Changing Password...</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-5">
        <h1 className="text-2xl font-semibold pb-3">Enter a new password</h1>

        <form className="space-y-4">
     
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D78A] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D78A] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-gray-400"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>


          {confirmPassword !== password && <p className="text-red-500 text-sm mt-1">The passwords do not match</p>}

          <button
            type="submit"
            className={`w-full bg-[#00D78A] text-white rounded-lg px-4 py-3 font-semibold ${
              !isFormValid ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={handlePasswordClick}
            disabled={!isFormValid || loading}
          >
            Login
          </button>
        </form>
      </div>
      </div>
  );
};

export default ResetPassword;
