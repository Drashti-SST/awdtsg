import React from 'react';
import { FiMail } from 'react-icons/fi';

const InputField = ({ label, type = "text", placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FiMail /></span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 py-2 rounded-full bg-black bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </div>
  );
};

export default InputField;
