import React from 'react';
import bgImage from '../../assets/login-bg-img.jpg';
import LoginForm from './loginForm';

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative font-inter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-purple-900/90"></div>

      {/* Form */}
      <div className="relative z-10 w-full px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
