import React from 'react';
import Input from '../../components/Input';
import AWDTSG from '../../assets/AWDTSG-text.png';
import { LaptopMinimalCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Validation Schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@$!%*?&]/, 'Must contain at least one special character'),
});

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === 'admin@example.com' && password === 'Password@123') {
      toast.success('Login Successful!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      reset();
    } else {
      toast.error('Invalid Credentials!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      reset();
    }
  };

  return (
    <div className="p-[2px] rounded-[20px] bg-gradient-to-b from-[#8442BD] to-[#EF9AE3] w-[90%] max-w-[550px] mx-auto">
      <div className="bg-black rounded-[20px] p-6 sm:p-10 md:p-[45px] w-full h-auto flex flex-col items-center justify-center text-white font-inter" style={{ minHeight: '500px', maxHeight: '570px' }}>
        <ToastContainer />
        <div className="flex justify-center mb-8">
          <img src={AWDTSG} alt="AWDTSG Logo" className="max-w-[160px] h-auto object-contain" />
        </div>

        <div className="w-full text-left mb-2 flex items-center">
          <h1 className="text-2xl font-semibold mr-2">Sign In</h1>
          <LaptopMinimalCheck size={26} className="text-purple-400" />
        </div>

        <p className="w-full text-left text-sm mb-6">Secure access for moderators & admins</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Input
            type="email"
            placeholder="your@email.com"
            iconName="envelope"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="************"
            iconName="lock"
            {...register('password')}
            error={errors.password?.message}
          />
          <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 border border-purple-700 hover:from-purple-700 hover:to-purple-900 transition duration-300 ease-in-out font-semibold">
            Sign In securely
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
