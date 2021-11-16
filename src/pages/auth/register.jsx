import Image from 'next/image'
import cb from 'classnames'
import SocialGroupIcon from '../../components/socials/SocialGroupIcon'
import HorizonStepper from '../../components/stepper/Stepper'

const register = (props) => {
  return (
    <div className={cb(
      'w-full h-full opacity-100', 
      'flex items-center justify-center',
      'overflow-y-auto',
      'p-2',
    )}>
      <div className={cb(
        'flex flex-col',
        'items-center justify-center'
      )}>
        <div className={cb(
          'mt-20'
        )}>
          <Image 
            src={`/img/logo-left.png`}
            width="333"
            height="70"
            alt="logo"
          />
        </div>
        
        <HorizonStepper {...props} />
        
        <SocialGroupIcon />
      </div>
  </div>
  );
}

export default register;