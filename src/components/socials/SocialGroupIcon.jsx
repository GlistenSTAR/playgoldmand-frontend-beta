import Image from 'next/image'
import Link from '../common/input/Link'
import cb from 'classnames'

const SocialGroupIcon = () => {
  return (
    <div className="flex">
      <Link href="#" className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/discord.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
      <Link href="#" className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/telegram.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
      <Link href="#" className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/reddit.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
    </div>
  );
}

export default SocialGroupIcon;