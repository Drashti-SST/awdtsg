import React from 'react';
import { MdEmail } from 'react-icons/md';

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current">
            <path d="M480 32C506.5 32 528 53.5 528 80V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80C0 53.5 21.5 32 48 32H480zM32 128V432c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V128L256 298.7 32 128zm416-32H64L256 261.3 448 96z"/>
          </svg>
        </span>
        <input
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pl-10 py-2 rounded-full w-full bg-[#000000] bg-opacity-80 border border-[#8442BD] text-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default TextInput;
