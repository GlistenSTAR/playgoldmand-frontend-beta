import Image from 'next/image'
import cb from 'classnames'

const SocailGroupIcon = () => {
  return (
    <div className="flex">
      <div className={cb('mx-1.5')}>
        <Image
          src={require('../../assets/img/icons/discord.png')}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </div>
      <div className={cb('mx-1.5')}>
        <Image
          src={require('../../assets/img/icons/telegram.png')}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </div>
      <div className={cb('mx-1.5')}>
        <Image
          src={require('../../assets/img/icons/reddit.png')}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </div> 
    </div>
  );
}

export default SocailGroupIcon;