import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../../public/client/supabase.ts';
import { MoonLoader } from  'react-spinners';


interface User{
  email:string,
  password:string
}

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState("Logging In...");


  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = email && password;

  async function handleSignUp({ email, password }: User): Promise<boolean> {

    let { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log("Error", error);
      alert(`Error: ${error.message}`);
      if (error?.message == "Email not confirmed") {
        // redirect to verification page
        navigate("/verify");
      }
      return false; 
    }
    else{
      return true;
    }
  
  }
  

  const handleSignupClick = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true); // Show spinner

    const newUser: User = { email, password };
    const success = await handleSignUp(newUser);

    setLoading(false); // Hide spinner

    if (success) {
      navigate("/"); // Redirect if signup is successful
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
          {/* spinner overlay */}
          {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400/20 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <MoonLoader color='#00D78A' loading={loading} size={50} />
            <p className="mt-2 text-gray-700 font-semibold">{message}</p>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
        <Link to="/"><img
            className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
            src="/img/logo.png"
            alt="Logo"
          /></Link>
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        </div>
        
        <form className="space-y-4">
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

          <div className="flex items-center justify-between">
            <span 
            onClick={() => {navigate("/Forgot-Password")}}
            className="text-sm text-[#00D78A] cursor-pointer hover:text-[#00D78A]">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className={`w-full bg-[#00D78A] text-white rounded-lg px-4 py-3 font-semibold ${
            !isFormValid ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={handleSignupClick}
            disabled={!isFormValid || loading}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#00D78A] hover:text-[#00D78A] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;