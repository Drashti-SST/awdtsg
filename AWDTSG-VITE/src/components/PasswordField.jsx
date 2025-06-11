import React from 'react';
import { FiLock } from 'react-icons/fi';

const PasswordField = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80zM384 256v192H64V256H384z"/>
            </svg>
        </span>
        <input
          type="password"
          placeholder={placeholder}
          className="w-full pl-10 py-2 rounded-full bg-black bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </div>
  );
};

export default PasswordField;
