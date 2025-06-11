import React, { forwardRef } from 'react';
import { Mail, Lock } from 'lucide-react';

const Input = forwardRef(({ type, placeholder, iconName, error, ...rest }, ref) => {
  const getIcon = (name) => {
    switch (name) {
      case 'envelope':
        return <Mail className="h-5 w-5" />;
      case 'lock':
        return <Lock className="h-5 w-5" />;
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
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
        className={`pl-10 py-3 w-full rounded-full bg-black bg-opacity-80 border ${error ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

export default Input;
