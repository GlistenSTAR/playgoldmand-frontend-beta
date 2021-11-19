import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'
import cb from 'classnames'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../../components/common/input/Input'
import Button from '../../components/common/input/Button';
import { useMutation } from 'react-query'
import { fetchAdminLogin } from '../../services/AuthService'
import { adminSecurity } from '../../services/AdminService';

const adminRealName = "goldmand";
const realPassword = "123456789";

const AdminLogin = (props) => {
  const router = useRouter();
  const [adminUsername, setAdminUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    isLoading,
    error,
    mutate: login,
  } = useMutation(fetchAdminLogin, {
    onSuccess: response =>
      {
        toast.success("Just a moment!");
        adminSecurity(response.data.token, router);
      },
  })

  const handleLogin = () => {
    if (adminUsername!==adminRealName || realPassword!==password) {
      toast.warn("Input the correct data!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      login({
        adminUsername,
        password,
      })
    }
  }
  return (
    <div className={cb(
      'w-full h-full opacity-100', 
      'flex justify-center items-center',
      'p-2 md:p-auto pt-10 md:pt-auto'
    )}>
      <div className={cb(
        'flex flex-col',
        'items-center justify-center'
      )}>
        <Image 
          src={`/img/logo-left.png`}
          width="333"
          height="70"
          alt="logo"
        />
        
        <div className={cb('w-full text-white')}>
          <div className={cb('mt-16 text-3xl text-center')}>
            Admin Login
          </div>
          <div className={cb(
            'w-full',
          )}>
            <div className={cb(
              'mt-8 md:mt-12'
            )}>
              <p>USERNAME</p>
              <Input 
                type="text" 
                onChange={(e)=> setAdminUsername(e.target.value)} 
                value={adminUsername} 
                required={true}
                className={cb(
                  'text-yellow bg-black bg-opacity-25'
                  ,'w-full mt-2 border-2 border-white'
                )}
              />
            </div>
            <div className={cb(
              'mt-2 md:mt-8'
            )}>
              <p>PASSWORD</p>
              <Input 
                id="password"
                type="password"
                placeholder="*******"
                onChange={(e)=> setPassword(e.target.value)} 
                value={password} 
                required={true}
                className={cb(
                  'text-yellow bg-black bg-opacity-25',
                  'w-full mt-2 border-2 border-white'
                )}
              />
            </div>
          </div>
        </div>
        <Button onClick={handleLogin} className={cb(
          'p-2 mt-12 mb-10 md:mb-12 w-64', 
          'border-4 border-green-500 rounded-full shadow-2xl', 
          'text-white text-lg bg-black bg-opacity-50'
        )}>Log In</Button>
        <ToastContainer />
      </div>
  </div>
  );
}

export default AdminLogin;