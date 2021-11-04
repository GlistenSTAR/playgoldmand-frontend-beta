import Image from 'next/image'
import cb from 'classnames'
import SocialGroupIcon from '../../components/socials/SocailGroupIcon'
import HorizonStepper from '../../components/stepper/Stepper'

const register = () => {
  return (
    <div className={cb(
      'w-screen h-screen opacity-100', 
      'flex justify-around'
    )}>
      <div className={cb(
        'absolute h-screen flex flex-col',
        'items-center justify-center'
      )}>
        <Image 
          src={require(`./../../assets/img/logo-left.png`)}
          width="333"
          height="70"
          alt="logo"
        />
        
        <HorizonStepper />

        <SocialGroupIcon />
      </div>
  </div>
  );
}

export default register;