import React, { useEffect } from 'react'
import Image from 'next/image'
import cb from 'classnames';
import SocialGroupIcon from '../components/socials/SocialGroupIcon'
import { useRouter } from 'next/router'
import Button from '../components/common/input/Button';
import { fetchCheckRegister } from '../services/AuthService';

const Home = (props) => {
  const router = useRouter();

  const ual = props['ual'] ? props['ual'] : {'activeUser': null};
  const activeUser = ual['activeUser'];
  const accountName = activeUser ? activeUser['accountName'] : null;

  const loginWax = async () => {
    ual.showModal();
  }

  useEffect(() => {
    const init = async () => {
      if(accountName) {
        let resp = await fetchCheckRegister({ accountName: accountName })
        if(resp.status === 200 && resp.data.data.isRegistered === true) {
          router.push('/dashboard');
        } else if(resp.status === 200 && resp.data.data.isRegistered === false) {
          router.push('/auth/register');
        } else {
          console.log('check register error')
          router.push('/')
        }
      }
    }
    init();
  }, [accountName])

  return (
    <div className={cb(
      'w-full h-full opacity-100', 
      'flex items-center justify-center',
    )}>
      <div className={cb(
        'flex flex-col items-center justify-center'
      )}>
        <Image 
          src={'/img/logo_1.png'}
          width="311"
          height="174"
          alt="logo"
        />

        <p className={cb(
          'mt-16 md:mt-20 mb-5 text-base text-white text-center italic'
        )}>Login With</p>

        <Image 
          src={'/img/wax_sign.png'}
          alt="wax_sign"
          width="220"
          height="67"
          className={
            cb('mt-3')
          }
        />
        <Button className={cb(
            'p-2 w-64 mt-10 mb-16 sm:mt-20 sm:mb-40', 
            'border-4 border-green-500 rounded-full shadow-2xl', 
            'text-white text-lg bg-black bg-opacity-50'
          )}
          onClick={()=>loginWax()}>
          START PLAYING
        </Button>
        <SocialGroupIcon />
      </div>
    </div>
  )
}

export default Home
