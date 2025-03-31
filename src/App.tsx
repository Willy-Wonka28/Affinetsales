import React from 'react';
import Landing from './components/Landing';
import Login from './components/userAuth/Login';
import SignUp from './components/userAuth/SignUp';
import VerifyEmail from './components/userAuth/VerifyEmail';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/verify" element={<VerifyEmail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
