import React from 'react';

const Input = ({ type, placeholder, iconName, ...rest }) => {
  // Function to return SVG icon based on name
  const getIcon = (name) => {
    switch (name) {
      case 'envelope':
        // FaEnvelope SVG
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current">
            <path d="M480 96c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H480zM192 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H160c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zM0 128V384c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128zm304 64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H272c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zM0 256V384c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H32C14.3 224 0 238.3 0 256zm304 64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H272c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zM0 384V384c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32v0c0-17.7-14.3-32-32-32H32C14.3 352 0 366.3 0 384zM32 384H480V128H32V384zm288-64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H272c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32zM32 192H480V128H32v64zm0 128H480V256H32v64z"/>
          </svg>
        );
      case 'lock':
        // FaLock SVG
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80zM384 256v192H64V256H384z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative mb-4">
      {iconName && (
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {getIcon(iconName)}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className="pl-10 py-3 w-full rounded-full bg-black bg-opacity-80 border border-purple-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default Input;
