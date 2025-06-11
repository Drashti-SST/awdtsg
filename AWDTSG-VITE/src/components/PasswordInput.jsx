import React from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';

const PasswordInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 w-5 fill-current">
            <path d="M288 32c-80.1 0-144.5 64.4-144.5 144.5S207.9 321 288 321s144.5-64.4 144.5-144.5S368.1 32 288 32zm0 240c-33.1 0-64-15.1-84.8-40.4L136 179.9c10.2-22.3 25.8-42.3 45.4-58.4L184.8 112c2.4-1.9 5.8-3.3 9.4-3.7l.1-.1c3.1-.3 6.1-.2 9.1 .4c4.3 .9 8.2 2.7 11.5 5.5l22.7 19.3c5.3 4.5 12.7 4.8 18.3 .8s7.9-10.9 5.4-17.2L288 128l-22.7 19.3c-5.3 4.5-12.7 4.8-18.3 .8s-7.9-10.9-5.4-17.2l2.6-6.4c-4.4-2.8-9.3-4.9-14.7-6.2c-1.3-.3-2.6-.5-3.9-.6c-3.1-.2-6.1-.1-9.1 .5c-3.6 .8-7.1 2.3-10 4.3L136 179.9c-20.7 25.3-31.5 54.4-31.5 86.1c0 88.4 71.6 160 160 160s160-71.6 160-160V256H288zM448 256c0 88.4-71.6 160-160 160s-160-71.6-160-160v0h320z"/>
          </svg>
        </span>
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pl-10 py-2 rounded-full w-full bg-[#000000] bg-opacity-80 border border-[#8442BD] text-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
