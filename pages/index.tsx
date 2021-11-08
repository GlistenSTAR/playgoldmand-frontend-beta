import type { NextPage } from 'next'
import Image from 'next/image'
import cb from 'classnames';
import SocialGroupIcon from '../components/socials/SocialGroupIcon'
import { useRouter } from 'next/router'
import Button from '../components/common/input/Button';

const Home: NextPage = (props) => {
  const router = useRouter();

  const goRegister = () =>{
    router.push('/auth/register');
  }

  return (
    <div className={cb(
        'w-screen sm:w-auto h-auto md:h-screen opacity-100', 
        'flex items-center justify-center',
        'pt-14 md:pt-auto'
      )}>
        <div className={cb(
          'flex flex-col items-center justify-center'
        )}>
          <Image 
            src={require('./../assets/img/logo_1.png')}
            width="311"
            height="174"
            alt="logo"
          />

          <p className={cb(
            'mt-16 md:mt-20 mb-5 text-base text-white text-center italic'
          )}>Login With</p>

          <Image 
            src={require('./../assets/img/wax_sign.png')}
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
            onClick={()=>goRegister()}>
            START PLAYING
          </Button>

          <SocialGroupIcon />
        </div>
    </div>
  )
}

export default Home
