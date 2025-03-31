import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../../public/client/supabase.ts';
import { MoonLoader } from  'react-spinners';

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

async function handleSignUp({ email, password, firstName, lastName }: User): Promise<boolean> {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.log("Error", error);
    alert(`Error: ${error.message}`);
    return false; 
  }

  if (data.user) {
    const { error: profileError } = await supabase.from("profiles").insert([
      { user_id: data.user.id, first_name: firstName, last_name: lastName, email: email },
    ]);

    if (profileError) {
      console.error("Error inserting user profile details:", profileError.message);
      return false; 
    }

    console.log("Profile created successfully!");
    return true; 
  }

  return false;
}

const SignUp = () => {
  const navigate = useNavigate(); 

  // Form States
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Disable button if any field is empty
  const isFormValid = firstName && lastName && email && password && confirmPassword && password === confirmPassword;

  const handleSignupClick = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true); // Show spinner

    const newUser: User = { firstName, lastName, email, password };
    const success = await handleSignUp(newUser);

    setLoading(false); // Hide spinner

    if (success) {
      navigate("/"); // Redirect if signup is successful
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative">
      {/* spinner overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400/20 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <MoonLoader color='#00D78A' loading={loading} size={50} />
            <p className="mt-2 text-gray-700 font-semibold">Signing Up...</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-5">
        <div className="flex flex-col items-center mb-5">
          <Link to="/">
            <img className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto" src="/img/logo.png" alt="Logo" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} className="input px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D78A] focus:border-transparent" />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} className="input px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D78A] focus:border-transparent" />
          </div>

          
          <div className="relative">
            <input
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

      
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
            onClick={handleSignupClick}
            disabled={!isFormValid || loading}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">By signing up, you agree to our Terms of Use and Privacy Policy</p>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#00D78A] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
