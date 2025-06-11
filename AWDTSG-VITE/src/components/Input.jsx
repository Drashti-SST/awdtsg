import React, { forwardRef, useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(({ type, placeholder, iconName, error, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

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

  const isPassword = type === 'password';

  return (
    <div className="mb-4 w-full">
      <div className="relative">
        {iconName && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {getIcon(iconName)}
          </div>
        )}
        <input
          ref={ref}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          {...rest}
          className={`pl-10 pr-10 py-3 w-full rounded-full bg-black bg-opacity-80 border 
            ${error ? 'border-red-500' : 'border-gray-700'} 
            text-purple-500 placeholder-purple-500 
            focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />

        {isPassword && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </div>
        )}
      </div>

      <div className="min-h-[20px] mt-1">
        {error && <p className="text-red-400 text-xs">{error}</p>}
      </div>
    </div>
  );
});

export default Input;
