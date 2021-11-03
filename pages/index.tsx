import type { NextPage } from 'next'
import Image from 'next/image'
import cb from 'classnames';
import SocialGroupIcon from '../components/socials/SocailGroupIcon'

const Home: NextPage = () => {
  return (
    <div className={
        cb('w-screen h-screen bg-cover bg-opacity-50', 
           'flex justify-around')
      }>
        <div className="absolute h-screen flex flex-col items-center justify-center">
          <Image 
            src={require('./../assets/img/logo_1.png')}
            width="311"
            height="174"
            alt="logo"
          />

          <p className={cb(
            'mt-20 mb-5 text-base text-white text-center')
          }>Login With</p>

          <Image 
            src={require('./../assets/img/wax_sign.png')}
            alt="wax_sign"
            width="220"
            height="67"
            className={
              cb('mt-3')
            }
          />
          <button className="p-2 mt-14 w-64 border-2 border-green-500 rounded-full text-white">START PLAYING</button>
          <SocialGroupIcon />
        </div>
    </div>
  )
}

export default Home
