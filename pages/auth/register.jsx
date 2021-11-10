import Image from 'next/image'
import cb from 'classnames'
import SocialGroupIcon from '../../components/socials/SocialGroupIcon'
import HorizonStepper from '../../components/stepper/Stepper'

const register = (props) => {
  return (
    <div className={cb(
      'w-screen sm:w-auto opacity-100', 
      'flex justify-around p-2 md:p-auto pt-10 md:pt-auto'
    )}>
      <div className={cb(
        'flex flex-col',
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