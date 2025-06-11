import React from 'react';
import Input from '../../components/Input';
import AWDTSG from '../../assets/AWDTSG-text.png';
import { FaUserLock } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="p-[2px] rounded-[20px] bg-gradient-to-b from-[#8442BD] to-[#EF9AE3] w-[90%] max-w-[550px] mx-auto">
      <div
        className="
        bg-black 
        rounded-[20px] 
        p-6 sm:p-10 md:p-[45px] 
        w-full h-auto 
        flex flex-col items-center justify-center 
        text-white font-inter"
        style={{ minHeight: '500px', maxHeight: '570px' }}
      >

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={AWDTSG} alt="AWDTSG Logo" className="w-40 h-12 sm:w-48 sm:h-14" />
        </div>

        {/* Heading */}
        <div className="w-full text-left mb-2 flex items-center">
          <h1 className="text-2xl font-semibold mr-2">Sign In</h1>
          <FaUserLock size={26} className="text-purple-400" />
        </div>

        <p className="w-full text-left text-sm mb-6">Secure access for moderators & admins</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            type="email"
            placeholder="your@email.com"
            iconName="envelope"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            iconName="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center text-sm mb-4 flex-wrap gap-2">
            <label className="flex items-center cursor-pointer relative">
              <div className="relative">
                <input
                  type="checkbox"
                  className="appearance-none h-5 w-5 border-2 border-purple-500 rounded-full checked:bg-purple-600 checked:border-purple-600 relative"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                {rememberMe && (
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
                    ✓
                  </span>
                )}
              </div>
              <span className="ml-3">Remember me</span>
            </label>

            <a href="#" className="text-purple-300 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 border border-purple-700 hover:from-purple-700 hover:to-purple-900 transition duration-300 ease-in-out font-semibold"
          >
            Sign In securely
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
